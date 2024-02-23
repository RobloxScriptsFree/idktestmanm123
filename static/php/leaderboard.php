<?php

$blacklist = [];

session_start();
if (get_included_files()[0] != __FILE__) {
  return;
}

include_once "main.php";
include_once "session_handler.php";

$no_auth = false;

if (!$session)
  $no_auth = true;
if ($no_auth == false)
  $user_id = $session["user_id"];

$leaderboard_cache_file = __DIR__ . '/cache/leaderboard';
$lock_file = __DIR__ . '/cache/leaderboard_writing';
$timeout = 60 * 60 * 1;

$generation_time = null;

if (file_exists($leaderboard_cache_file) && (time() - filemtime($leaderboard_cache_file)) > $timeout) {
  unlink($leaderboard_cache_file);
}

$raw_data = is_readable($leaderboard_cache_file) ? file_get_contents($leaderboard_cache_file) : null;

if ($raw_data && $try_unserialize = unserialize($raw_data)) {
  $players_data = $try_unserialize;
  $cached = true;
} else {
  $cached = false;
  $fp = fopen($lock_file, 'r+');

  if (!flock($fp, LOCK_EX | LOCK_NB, $blocked)) {
    if ($blocked) {
      exit('Data is updating right now, please wait and try again');
    } else {
      exit('Unknown error, please try again');
    }
  } else {
    $generation_time_start = time();
    $players_data = [];

    $result = $conn->query('SELECT starter_id, player_id, starter_value, player_value, winner_side, starter_side FROM games ORDER BY game_id DESC LIMIT 0, 10000000');
    while ($row = $result->fetch_assoc()) {
      if (in_array(intval($row['starter_id']), $blacklist) == false) {
        if (isset($players_data[strval($row['starter_id'])]) == false) {
          $players_data[strval($row['starter_id'])] = [
            'profit' => 0,
            'total_value' => 0,
            'games' => 0,
            'user_id' => intval($row['starter_id'])
          ];
        }
        $players_data[strval($row['starter_id'])]['games'] += 1;
        $players_data[strval($row['starter_id'])]['total_value'] += intval($row['starter_value']);
        if ($row['starter_side'] == $row['winner_side'])
          $players_data[strval($row['starter_id'])]['profit'] += intval($row['player_value']);
        else
          $players_data[strval($row['starter_id'])]['profit'] -= intval($row['starter_value']);
      }
      if (in_array(intval($row['player_id']), $blacklist) == false) {
        if (isset($players_data[strval($row['player_id'])]) == false) {
          $players_data[strval($row['player_id'])] = [
            'profit' => 0,
            'total_value' => 0,
            'games' => 0,
            'user_id' => intval($row['player_id'])
          ];
        }
        $players_data[strval($row['player_id'])]['games'] += 1;
        $players_data[strval($row['player_id'])]['total_value'] += intval($row['player_value']);
        if ($row['starter_side'] != $row['winner_side'])
          $players_data[strval($row['player_id'])]['profit'] += intval($row['starter_value']);
        else
          $players_data[strval($row['player_id'])]['profit'] -= intval($row['player_value']);
      }
    }

    file_put_contents($leaderboard_cache_file, serialize($players_data));

    $generation_time = time() - $generation_time_start;

    flock($fp, LOCK_UN);
  }
}


$players = [];
foreach ($players_data as $key => $value)
  array_push($players, $value);

usort($players, function ($a, $b) {
  return $b['profit'] - $a['profit'];
});

$top_users = [];

for ($x = 0; $x < 10; $x++) {
  if (!isset($players[$x]))
    continue;

  $that_profile = $players[$x];
  $profile_title = 'Unknown';
  $profile_photo = 'https://tr.rbxcdn.com/bba6f5a1b4c18de61c715639d36dd0b1/150/150/AvatarHeadshot/Png';
  //$result = $conn->query('SELECT username, thumbnail FROM user WHERE user_id = "'.$that_profile['user_id'].'" LIMIT 0, 1');
//if ($result->num_rows > 0) {
//  $row = $result->fetch_assoc();
//  $profile_title = $row['username'];
//  $profile_photo = $row['thumbnail'];
//}

  //array_push($top_users, [
//  'user_id' => intval($that_profile['user_id']),
//  'total_value' => $that_profile['total_value'],
//  'games' => $that_profile['games'],
//  'profit' => $that_profile['profit'],
//  'place' => $x + 1,
//  'title' => $profile_title,
//  'avatar' => $profile_photo
//]);
//}
// Addition
  $result = $conn->query('SELECT username, thumbnail FROM user WHERE user_id = "' . $that_profile['user_id'] . '" LIMIT 0, 1');
  if ($result && $result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $profile_title = $row['username'];
    $profile_photo = $row['thumbnail'];
  } else {
    // Handle the case where no rows were returned, set default values or handle accordingly
    $profile_title = 'Unknown';
    $profile_photo = 'default_avatar_url'; // Set a default avatar URL or handle accordingly
  }
  array_push($top_users, [
    'user_id' => intval($that_profile['user_id']),
    'total_value' => $that_profile['total_value'],
    'games' => $that_profile['games'],
    'profit' => $that_profile['profit'],
    'place' => $x + 1,
    'title' => $profile_title,
    'avatar' => $profile_photo
  ]);
  //

}


if ($no_auth == false) {

  $is_listed = false;
  foreach ($top_users as $key => $value) {
    if ($value['user_id'] == intval($user_id)) {
      $is_listed;
      break;
    }
  }

  if ($is_listed == false) {
    $result = $conn->query('SELECT thumbnail FROM user WHERE user_id = "' . $user_id . '" LIMIT 0, 1');
    $profile_photo = NULL;
    if ($result->num_rows > 0) {
      $row = $result->fetch_assoc();
      $profile_photo = $row['thumbnail'];
    }
    if (isset($players_data[strval($user_id)])) {
      $my_profile = $players_data[strval($user_id)];
      $my_place = count($players) + 1;
      $count_num = 0;
      foreach ($players as $key => $value) {
        $count_num += 1;
        if ($value['user_id'] == intval($user_id)) {
          $my_place = $count_num;
          break;
        }
      }
      $top_users[10] = [
        'user_id' => intval($user_id),
        'total_value' => $my_profile['total_value'],
        'games' => $my_profile['games'],
        'profit' => $my_profile['profit'],
        'place' => $my_place,
        'title' => 'You',
        'avatar' => $profile_photo
      ];
    } else {
      $top_users[10] = [
        'user_id' => intval($user_id),
        'total_value' => 0,
        'games' => 0,
        'profit' => 0,
        'place' => count($players) + 1,
        'title' => 'You',
        'avatar' => $profile_photo
      ];
    }
  }

}

exit(json_encode([
  'result' => 'OK',
  'data' => array_values($top_users),
  'cached' => $cached,
  'generation_time' => $generation_time
]));
