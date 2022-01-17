<?


$t=date('d-m-Y');
$dayName = strtolower(date("D",strtotime($t)));
$dayNum = strtolower(date("d",strtotime($t)));
$currentDayo = floor(($dayNum - 1) / 7) + 1;

$array = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
];


echo "Today is " . $array(date('d')) . "<br>";