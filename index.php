<?php
	
	header('Access-Control-Allow-Origin: *');

	$data = [

		[
			'id'=>'1',
			'titulo'=>'Camaleões',
			'image'=>'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2FKm87VF8VKkIFJtRoPsWiux4sr.jpg',
			'ano'=>'2023',
			'genero'=>'Thriller, Crime, Drama, Mistério',
			'duracao'=>'2h16m',
			'valor'=>'R$0,70',
			'descricao'=>'Um detetive da Nova Inglaterra trabalha para solucionar o assassinato de um corretor 			de imóveis e, como resultado do caso, passa por uma reflexão sobre si mesmo.'

		],
		[
			'id'=>'2',
			'titulo'=>'A Chamada',
			'image'=>'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yd0iEtqAXseXQgKf9RjmMaPjUPG.jpg',
			'ano'=>'2023',
			'genero'=>'Ação, Mistério, Thriller, Crime',
			'duracao'=>'1h31m',
			'valor'=>'R$0,80',
			'descricao'=>'Com seus filhos presos no banco de trás e uma bomba que explodirá se eles saírem do 			carro, um trajeto normal se torna um jogo distorcido de vida ou morte enquanto Matt 			Turner segue as instruções cada vez mais perigosas de um estranho em uma corrida contra 		o tempo para salvar sua família.'

		],
		[
			'id'=>'3',
			'titulo'=>'Gran Turismo: De Jogador a Corredor ',
			'image'=>'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qU60nhBRbKU23gIGrZi2CvUj6MQ.jpg',
			'ano'=>'2023',
			'genero'=>'Ação, Drama, Aventura',
			'duracao'=>'2h15m',
			'valor'=>'R$0,90',
			'descricao'=>'Baseado na história de Jann Mardenborough, e relata a trajetória de um jogador de 			videogame que utilizou suas habilidades nos simuladores para se tornar um piloto 				profissional de verdade.'
		],
		[
			'id'=>'4',
			'titulo'=>'Missão de Sobrevivência ',
			'image'=>'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xsmNNU5UbnurOnCOdUHbpv2XyFI.jpg',
			'ano'=>'2023',
			'genero'=>'Ação, Thriller',
			'duracao'=>'1h59m',
			'valor'=>'R$0,20',
			'descricao'=>'Um agente disfarçado da CIA chamado Tom Harris, que está designado para o Oriente 			Médio. Um vazamento de inteligência expõe perigosamente sua missão secreta e revela sua 		identidade secreta. Preso no coração de um território hostil, Harris e seu tradutor 			devem lutar para sair do deserto e chegar a um ponto de extração em Kandahar, no 				Afeganistão, enquanto escapam das forças especiais de elite que os caçam.'
		],
		[	
			'id'=>'5',
			'titulo'=>'Elementos',
			'image'=>'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7QsY7Jo3ZgL3pa1kdo28TA7Z6qo.jpg',
			'ano'=>'2023',
			'genero'=>'Animação, Comédia, Família, Fantasia, Romance',
			'duracao'=>'1h42m',
			'valor'=>'R$0,50',
			'descricao'=>'Em uma cidade onde moradores do fogo, da água, da terra e do ar vivem juntos, uma 			jovem impetuosa e um homem tranquilo estão prestes a descobrir algo elementar: o quanto 		realmente têm em comum.'
		],
		[
			'id'=>'6',
			'titulo'=>'Transformers: O Despertar das Feras',
			'image'=>'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zEqwfO5R2LrrLgV61xm8M9TmNTG.jpg',
			'ano'=>'2023',
			'genero'=>'Ação, Aventura, Ficção científica',
			'duracao'=>'2h07m',
			'valor'=>'R$0,60',
			'descricao'=>'Nesta aventura cheia de adrenalina, Optimus Prime e os Autobots enfrentam seu maior 			desafio até agora. Quando uma nova ameaça capaz de destruir todo o planeta surge, eles 			devem se unir a uma poderosa facção conhecida como os Maximals. Com o destino da 				humanidade 	em jogo, Noah (Anthony Ramos) e Elena (Dominique Fishback) farão o que for 			preciso para 		ajudar os Transformers na batalha final para salvar a Terra.'
		],

	];

	die(json_encode($data));

?>