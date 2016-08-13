<?php

//$first_name = 'Shaina';

//$last_name = 'Veloz';

//$age = 25;

//$birth_year = 1991;

//$current_year = 2016;

//$age = $current_year - $birth_year;

// echo "My name is $first_name $last_name. \n";
// echo "I'm $age years old. \n";

// $names = [
// 	'Brian',
// 	'Edna'
// ];

// $names = [
// 	'Brian' => ['last' =>'Burnside', 'age' => 27],
// 	'Edna' => ['last' => 'Neal', 'age' =>30]
// ];

// for ($i = 0; $i < count($names); $i++){
// 	$full_name = $value[0] . " " . $
// 	echo "My name is $names \n";
// 	echo "I am $age years old \n";
// }

// foreach($names as $first => $value){
// 	echo $;
// 	echo $value;
// }

// $names['Burnside'];

// class hero{
// 	public $name;
// 	private $realName;

// 	public function __construct($name, $realName){
// 		$this->name = $name;
// 		$this->realName = $realName;
// 	}

// 	public function printName(){
// 		echo $this->realName ."\n";
// 	}
// }

// $hero1 = new hero('the Flash', 'Barry Allen');
// $hero1-> printName();
// $hero2 = new hero('Batman', 'Bruce Wayne');

require "./helpers.php"; //require is a statement now within PHP

class user{
	public $name;
	private $last_name;
	public $email;
	private $password;

	public function __construct($name, $last_name, $email, $password){
		$this->name = $name;
		$this->last = $last_name;
		$this->email = $email;
		$this->password = $password;
	}

	public function printUser(){
		echo $this-> name ."\n";
		echo $this-> last ."\n";
		echo $this-> email ."\n";

	}
}

$user1 = new user('Shaina', 'Veloz', 'test@email.com', 'blah');
$user1-> printLn(printUser());

$user2 = new user('Candy', 'Land', 'est@email.com', 'lah');
$user2->printUser();

class Pokemon{
	public $name;
	public $type;
	private $abilities;

	public function __construct($name, $type, $abilities){
		$this->name = $name;
		$this->type = $type;
		$this->abilities = $abilities;
	}

	public function speak(){
		echo $this->$name;
	}

	public function attack(){

	}

	public function newAbility($ability){
		$this->abilities[] = $ability;
		array_push($this->abilities, $ability)
	}

	public function listAbilities(){
		return $this->abilities;
	}
}

$pokemon1 = new Pokemon('Charmander', 'Fire', ['Blaze', 'Solar Power']);

$pokemon1->newAbility('Flame Thrower');
print_r($pokemon1->listAbilities());

class EvolvedPokemon extends Pokemon{
	public function speak (){
		echo 'Hey, I\'m Evloved!';
	}

	public static function speak2(){
		echo 'Hey, I\'m statically evolved!';
	}
}

$pokemon2->new EvolvedPokemon('Pikachu', 'Electric', ['Thunder Shock']);

EvolvedPokemon::speak2();


//setCharacters('Hi my name is Helpers!');



