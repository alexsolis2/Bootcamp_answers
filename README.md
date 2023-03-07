## Bootcamp_answers

## Week 1

## Lets make pizza
Algoritmo

1- Dirigirse a la cocina

2- Tomar todos los ingredientes y ponerlos sobre un lugar limpio

3- Tomar la masa y prepararla

4- Darle la forma a la masa

5- Agregar los ingredientes

6- Hornear por 15 minutos

## Hot N Cold
Algoritmo

1- Verificar cual es la conversion que se va a realizar

  1- Si es de Celsius a fahrenheit tomar la entrada en grados celsius y guardarlo
  
  2- Multiplicar la entrada anterior por 9/5 y a esto sumarle 32
  
  3- Guardar ese resultado como la conversion a fahrenheit
  
  4- Mostrar el resultado

  1- Si es de Fahrenheit a Celsius tomar la entrada en grados Fahrenheit y guardarlo
  
  2- A la entrada anterior restarle 32 y a esto multiplicarlo por 5/9
  
  3- Guardar ese resultado como la conversion a celsius
  
  4- Mostrar el resultado

## Some geometry
Algoritmos

1- Pedir que figura quiere calcular el volumen

    1- Si es una piramide solicitar los datos, longitud de la base, Ancho de la base, Altura de la pirámide y almacenarlos
    
    2- Luego multiplicar los valores antes dados y a ese resultado se le divide entre 3, almacenar el resultado
    
    3- Mostrar el resultado
    
    
    1- Si es un cubo Solicitar el valor de la arista y elevarla a la 3, luego almacenar el resultado
    
    2- Mostrar el resultado
    
    
    1- Si es una esfera, solicitar el valor del radio, y almacenarlo
    
    2- Elevar el valor del radio a la potencia 3 y almacenarlo
    
    3- Luego multiplicar ese resultado por 4/3 y por el numero pi
    
    4- Mostrar el resultado
    
 
## Numbers , Ckeck even or odd

1- Tomar el numero y dividirlo entre 2

2- Revisar el resultado si el residuo de la division es 0 escribir par, de lo contrario impar

Fin


## How old are you

1- Recibir la entrada en dia-mes-año

2- Verificar si el mes es menor al mes actual, a 2022 restarle el año de nacimiento

       3 - Devolver el resultado

2.2- Si es mayor al mes actual, a 2022 restarle el año de nacimiento y a esto restarle uno
    
       3- Devolver el resultado 
       
2.3 Si los meses son iguales, verificar el dia, si es menor al dia actual, , a 2022 restarle el año de nacimiento
    
       3 - Devolver el resultado 

2.4 - Si es mayor al dia actual, a 2022 restarle el año de nacimiento y a esto restarle uno
    
       3- Devolver el resultado

fin


## Find the treasure

Premisas

1- Hay una habitacion con tres cofres.

2- Sabemos que al menos uno tiene un tesoro en él

3- Cada cofre tiene un mensaje, pero todos los mensajes son mentiras.

Cofre izquierdo: El cofre del medio tiene un tesoro. Entonces como no es verdad,  el cofre del medio no tiene un tesoro. 

Cofre medio: Todos estos cofres tienen tesoros en ellos. Entonces como no es verdad, no todos estos cofres tienen tesoros en ellos

Cofre derecho: Solo uno de estos cofres tiene tesoros. Entonces como no es verdad, No solo uno de estos cofres tiene tesoros.

Estan en el izquierdo y derecho


## Week 2


## Logic problem

Premisas

1- Alice: "Nobody studied math yesterday".

2- Bob: "1 person studied math yesterday".

3- Charlie: "2 people studied math yesterday".

4- Dan: "3 people studied mathematics yesterday".

5- Eva: "4 people studied mathematics yesterday".

The teacher knows that only those who studied would be telling the truth and those who didn't would be lying. Who is telling the truth?

Si la uno fuera cierta, entonces Alice esta diciendo la verdad, pero si Alice esta diciendo la verdad entonces estudio, por lo tanto se contradice con la premisa.

2- Si Bob esta diciendo la verdad, entonces 1 persona estudio, y si dice la verdad fue el quien estudio.

3-Los demas nombran mas de una persona, si estuvieran diciendo la verdad quiere decir mas de una persona estudio, cosa que los contradice.

Por lo tanto Bob dice la verdad.


## Which comes first, cereal or milk

Pseudocodigo

1- Ir a la cocina

2- Agarrar un recipiente

3- Sacar el cerearl y la leche

4- vertir el cereal y luego la leche

5- Agregar azucar si asi lo desea

## Print my name

Algoritmo myName

          Imprimir "Alex Solis"
FinAlgoritmo

## Print my name and age

Algoritmo myName

	 Imprimir "Alex Solis"
	 Imprimir "27"
	
FinAlgoritmo

## Algorithm Game
![Image Text](https://github.com/alexsolis2/Bootcamp_answers/blob/main/Captura%20desde%202022-11-29%2015-33-30.png)


## Even or odd
Algoritmo EvenorOdd

	Imprimir "Digite el numero"
	
	Leer numero
	
	Resultado<-numero%2
	
	Imprimir Resultado
	
FinAlgoritmo

## Register form

Algoritmo Form

	Imprimir "First Name"
	
	Leer FN
	Imprimir "Last Name"
	
	Leer LA
	
	Imprimir "Age"
	
	Leer Age
	
	Imprimir "Email"
	
	Leer Em
	
	Imprimir "Address"
	
	Leer Add
	
	Imprimir "Datos del usuario"
	
	Imprimir "Nombre: ", FN
	
	Imprimir "Apellido: ", LA
	
	Imprimir "Edad: ", Age
	
	Imprimir "Email: ", Em
	
	Imprimir "Direccion: ", Add
	
FinAlgoritmo

## Poner titulo

T & T = T

T & F = F

F & T = T   xxxx F

F & F = F

T | T = T

T | F = F

F | T = T xxx  F

F | F = F

~T = T xxxxx F

~F = T

(T & F) | (~F) = T

(T | F ) & (F | F) = T xxx F

~((T | F ) & (F | F)) & F = T XXX F

~((T | F ) & (F | F)) & T = F  XXX T

## Boolean results

Algoritmo boolean

	a <- 5 == 3
	
	  //Falso, ya que 5 es distinto de 3
	
	b <- 4 <> 3
	
	  // True, ya que 4 es distinto de 3
	
	c <- 7 > 7
	
	  // Falso, ya que 7 es mayor que 7
	
	d <- 4 < 4
	
	   //Falso, ya que 4 es igual que 4
	   
	e <- 100 <= 90
	
	    // Falso, ya que 100 es mayor que 90
	
	f <- 40 >= 40
	
	     //True, ya que 40 es igual que 40
	     
	Imprimir a
	
	Imprimir b
	
	Imprimir c
	
	Imprimir d
	
	Imprimir e
	
	Imprimir f
	
FinAlgoritmo


## Identify odd and even numbers

Algoritmo EvenorOdd

	  Imprimir "Digite el numero"
	
	  Leer numero
	  
	  Resultado<-numero%2
	  
	  Si Resultdo == 0 Entonces
	  
		Imprimir "Numero ", numero, " es par"
		
	  SiNo
	  
	        Imprimir "Numero ", numero, " es impar"
	
	Fin Si
	
	
FinAlgoritmo


## Week 3


## Simple calculator

Algoritmo Simplecalculator
	
	 Imprimir "Ingrese primer numero"
	
	 Leer num1
	 
	 Imprimir "Ingrese segundo numero"
	 
	 Leer num2
	 
	 Imprimir "Ingrese una operacion: +,-,*,/"
	
	 Leer op
	 
	   Si op == "+" | op == "-" | op == "*" | op == "/"  Entonces
		   
		   Si op == "+" Entonces
			
			Imprimir "Procesando ",num1, " + ", num2
			
			Imprimir num1+num2
			
		   Fin Si
		   
		   Si op == "-" Entonces
		   
			 Imprimir "Procesando ",num1, " - ", num2
			
			 Imprimir num1-num2
		   Fin Si
		 
		   Si op == "*" Entonces
		 	
			Imprimir "Procesando ",num1, " * ", num2
			
			Imprimir num1*num2
		
		   Fin Si
		   
		   Si op == "/" Entonces
			    
			    Imprimir "Procesando ",num1, " / ", num2
			
			    Imprimir num1/num2
		   Fin Si
		   
	SiNo
		
		Imprimir "La operacion no es valida"
	
	Fin Si

FinAlgoritmo

## Algoritmo specialNumber

	Leer num
	
	  Si num == 100 Entonces
		
		  Imprimir "This is a special number"
	   SiNo
		
		  Si num<1000 & num/10 == 0 & num <> 100   Entonces
			
			Imprimir  "This number is almost special"
		  SiNo
			
			Imprimir "Just a regular number"https://github.com/alexsolis2/Bootcamp_answers/blob/main/Captura%20desde%202022-11-29%2015-33-30.png
		  
		  Fin Si
		  
	Fin Si

FinAlgoritmo


## Algoritmo Simplecalculatorsw
	
	Imprimir  "Ingrese primer numero"
	
	Leer n1
	
	Imprimir  "Ingrese segundo numero"
	
	Leer n2
	
	Imprimir  "Ingrese una operacion: +,-,*,/"
	
	Leer op
	
	  Si op == "+"  | op == "-"  | op == "*"  | op == "/" Entonces
		   Segun  op Hacer
			  "+":
				  Imprimir "Procesando: ", n1, " + ",n2
				  
				  Imprimir "Resultado: ",n1+n2
				  
			  "-":
				   Imprimir "Procesando: ", n1, " - ",n2
				   
				   Imprimir "Resultado: ",n1-n2
				   
			  "*":
			  
				Imprimir "Procesando: ", n1, " * ",n2
				
				Imprimir "Resultado: ",n1*n2
				
			  "/":
				
				Imprimir "Procesando: ", n1, " / ",n2
				
				Imprimir "Resultado: ",n1/n2
		
		FinSegun
	
	SiNo
		
		Imprimir "La operacion no es valida"
	
	Fin Si
	
FinAlgoritmo

## Algoritmo MultiOptionProgram

	Imprimir "Opciones disponibles"
	
	Imprimir "1. Sumar dos numeros"
	
	Imprimir "2. Imprimir dia de la semana"
	
	Imprimir "3. Calcular longitud de texto"
	
	Imprimir "Ingrese la opcion seleccionada"
	
	Leer op
	
	Segun op Hacer
		
		1:
			
			Imprimir "Ingrese el primer numero"
			
			Leer n1
			
			Imprimir "Ingrese el segundo numero"
			
			Leer n2
			
			Imprimir "Resultado: ",n1+n2
		
		2:
			
			Imprimir "Ingrese el dia de la semana en numeros (1-7)"
			
			Leer dia
		    https://github.com/alexsolis2/Bootcamp_answers/blob/main/Captura%20desde%202022-11-29%2015-33-30.png
		         Segun dia Hacer
					
					1: Imprimir "Lunes"
					
					2: Imprimir "Martes"
					
					3: Imprimir "Miercoles"
					
					4: Imprimir "Jueves"
					
					5: Imprimir "Viernes"
					
					6: Imprimir "Sabado"
					
					7: Imprimir "Domingo"
					
			FinSegun
			
		3:
			
			Imprimir "Digite el texto: "
			
			Definir text como cadena
			
			Leer text
			
			Imprimir "Longitud: ", Longitud(text)
	
	FinSegun

FinAlgoritmo

## Algoritmo MultiplicationTables

	Imprimir "Ingrese la tabla a calcular"
	
	Leer tabla
	
	i<-1
	
	Mientras i<=10 Hacer
	        	Imprimir tabla, "* ",i, " = ",tabla*i
			
		        i<-i+1
	FinMientras
	
FinAlgoritmo

## Proceso SimpleCalcwDwhile
	stop<-""
	
	Repetir
		
		Imprimir "Ingrese primer numero"
		
		Leer num1
		
		Imprimir "Ingrese segundo numero"
		
		Leer num2
		
		Imprimir "Ingrese una operacion ? +,-,*,/"
		
		Leer op
		
		Segun op Hacer
			
			"+":
				
				Imprimir "Procesando: ",num1," + ",num2
				
				Imprimir "Resultado: ", num1+num2
			
			"-":
				
				Imprimir "Procesando: ",num1," - ",num2
				
				Imprimir "Resultado: ", num1-num2
			
			"*":
				
				Imprimir "Procesando: ",num1," * ",num2
				
				Imprimir "Resultado: ", num1*num2
			
			"/":
				
				Imprimir "Procesando: ",num1," / ",num2
				
				Imprimir "Resultado: ", num1/num2
		
		FinSegun
		
		Imprimir "Deseas continuar con la operacion ? Si / No"
		
		Leer stop
	
	Hasta Que stop == "No"

FinProceso

## Algoritmo MultiplicationTableswithFor
	
	Imprimir "Ingrese la tabla a calcular"
	
	Leer tabla
	
	Imprimir "@ Tabla de ",tabla," @"
	
	Para i<-1 Hasta 10 Con Paso 1 Hacer
		
		Imprimir tabla, " * ", i," = " ,tabla * i
	
	FinPara

FinAlgoritmo

## Algoritmo AscendingandDescendingNumbers
	
	Imprimir "Ingrese un numero"
	
	Leer num
	
	Imprimir "Operaciones disponibles:"
	
	Imprimir "1. Imprimir en orden Ascendente"
	
	Imprimir "2. Imprimir en orden Descendente"
	
	Imprimir "Ingrese operacion a ejecutar"
	
	Leer op
	
	Si op == 1 Entonces
	
		Para i<-0 Hasta num Con Paso 1 Hacer
			
			Imprimir i
		
		FinPara
		
	SiNo
		
		Para i<-num Hasta 0 Con Paso -1 Hacer
		
			Imprimir i
			
		FinPara
		
	Fin Si
	
FinAlgoritmo

## Algoritmo Greetings

	
	Imprimir "======= Cheers ======="
	
	Seguir<-""
	
	Mientras Seguir<> "No" Hacer
		
		Imprimir "Ingrese la hora actual (0-23):"
		
		Leer hora
		
		Si hora<=12 & hora >= 0 Entonces
		        
			Imprimir "Buenos dias!"
		
		Fin Si
		
		Si hora>=13 & hora <=18 Entonces
			
			Imprimir "Buenas tardes!"
		
		Fin Si
		
		Si hora>=19 & hora <=23 Entonces
			
			Imprimir "Buenas noches!"
		
		Fin Si
		
		Imprimir "Desea continuar ? Si/No"
		
		Leer Seguir
	
	FinMientras

FinAlgoritmo


## Week 4


## Algoritmo Averagesalesandcommission
	
	Imprimir "Write the total number of sales to enter"
	
	Leer total
	
	i<-1
	
	average<-0
	
	Mientras i<=total Hacer
		
		Imprimir "Write the value of the sale number: ",i
		
		leer venta
		
		average<-average+venta
		
		Imprimir average
		
		i<-i+1
	
	Fin Mientras
	
	i<-i-1
	
	totalaver<-average/i
	
	Imprimir "The average sales is: ", totalaver
	
	Si total>5 Entonces
		
		Imprimir "The comission received by the seller is: ",average*0.15
	
	SiNo
		
		Imprimir "The comission received by the seller is: ",average*0.1
	
	Fin Si

FinAlgoritmo


## Algoritmo FullName

	Imprimir "write a name"
	
	Leer pn
	
	Imprimir "write a last name"
	
	Leer lastn
	
	fn<-Mayusculas(Subcadena(pn,1,1))
	
	fln<-Mayusculas(Subcadena(lastn,1,1))
	
	rn<-Minusculas(Subcadena(pn,2,Longitud(pn)))
	
	rlast<-Minusculas(Subcadena(lastn,2,Longitud(lastn)))
	
	Imprimir Concatenar(fn,rn)," ",Concatenar(fln,rlast)

FinAlgoritmo


## Algoritmo FullName
	
	Imprimir "write a name"
	
	Leer pn
	
	Imprimir "write a last name"
	
	Leer lastn
	
	fn<-Mayusculas(Subcadena(pn,1,1))
	
	fln<-Mayusculas(Subcadena(lastn,1,1))
	
	rn<-Minusculas(Subcadena(pn,2,Longitud(pn)))
	
	rlast<-Minusculas(Subcadena(lastn,2,Longitud(lastn)))
	
	Imprimir Concatenar(fn,rn)," ",Concatenar(fln,rlast)

FinAlgoritmo

## Algoritmo FullName
	
	i<-1
	
	Mientras i<=10 Hacer
		
		x<-Aleatorio(1,7)
		
		s<-Aleatorio(1,7)
		
		Si x==s Entonces
			
			Imprimir x," ",s," the dice are the same " 
		
		SiNo
			
			Imprimir x," ",s
		
		Fin Si
		
		Imprimir x," ",s
		
		i<-i+1
	
	Fin Mientras
	
FinAlgoritmo


## Algoritmo Distancetozero
	
	i<-1
	
	n<-0
	
	Mientras i<=5 Hacer
		
		Imprimir "Write a number"
		
		leer num
		
		Si num>n Entonces
			
			n<-num
		
		Fin Si
		
		i<-i+1
		
	Fin Mientras
	
	Imprimir trunc(n)
	
FinAlgoritmo


## Algoritmo TossCoin

	Imprimir "enter the name of the first player"
	
	leer fname
	
	Imprimir "enter the amount to play"
	
	leer amount
	
	Imprimir "enter the name of the second player"
	
	leer sname
	
	Imprimir "enter the amount to play"
	
	leer amount2
	
	Si amount<=0 & amount2<=0 Entonces
		
		Imprimir "game canceled"
	Fin Si
	
	
	Si amount<=0 Entonces
	
	        Imprimir "player wins :",Mayusculas(sname), " amount won: ",amount2
	
	FinSi
	
	Si amount2<=0 Entonces
		
		Imprimir "player wins :",Mayusculas(fname), " amount won: ",amount
	
	SiNo
		
		coin<-Aleatorio(1,2)
		
		am<-Aleatorio(1,2)
		
		Si am==1 Entonces
			
			prem = amount
		
		SiNo
			
			prem = amount2
		
		Fin Si
		
		Si coin == 1 Entonces
			
			Imprimir "player wins :",Mayusculas(fname), " amount won: ",prem
		
		SiNo
			
			Imprimir "player wins :",Mayusculas(sname), " amount won: ",prem
		
		Fin Si
	
	FinSi

FinAlgoritmo

## Funcion total <- TotalPrice(monto,impuesto)
	
	Definir total Como Numero;
	
	multi = impuesto/100
	
	monto = monto * multi + monto
	
	Si monto>3000 Entonces
		
		descuento = monto*0.1
		
		total = monto - descuento
        SiNo
		
		total = monto
	
	Fin Si

FinFuncion

## Algoritmo example_TotalPrice
	
	Imprimir TotalPrice(1000,21)

   FinAlgoritmo

## Funcion dalevuelta <- ReverseDirectionAndSize(cadena)
	
	Definir dalevuelta Como Caracter;
	
	c<-1
	
	f<-Longitud(cadena)
	
	Mientras c<=f Hacer
		
		primero = Mayusculas(Subcadena(cadena,c,c))
		
		comparar = Subcadena(cadena,c,c)
		
		Si comparar == primero Entonces //esta en mayuscula
			
			dalevuelta=Concatenar(Minusculas(comparar),dalevuelta)
			
			c<-c+1
			
			//Imprimir dalevuelta
		
		SiNo
			
			dalevuelta=Concatenar(Mayusculas(comparar),dalevuelta)
			
			c<-c+1
			
			//Imprimir dalevuelta
		
		Fin Si
	
	Fin Mientras

FinFuncion


## Algoritmo example_ReverseDirectionAndSize
	
	Imprimir ReverseDirectionAndSize("Text")

FinAlgoritmo

## Week 5

## Time Converter

Funcion convertido <- timeConverter(seconds)

	d = 0
	
	h = 0
	
	m = 0
	
	s = ""
	
	Si seconds>=86400 Entonces
	
			d = TRUNC(seconds / 86400)
			
			seconds = seconds mod 86400
			
	Fin Si
		
	Si seconds>=3600 Entonces
	
		h = TRUNC(seconds / 3600)
		
		seconds = seconds mod 3600
		
	Fin Si
		
	Si seconds>=60 Entonces
	
			m = TRUNC(seconds / 60)
			
			seconds = seconds mod 60
			
	Fin Si
	
	s = ConvertirATexto(seconds)
	
	d1=ConvertirATexto(d)
	
	h1=ConvertirATexto(h)
	
	m1=ConvertirATexto(m)
	
	convertido = "days: "+d1+" hours: "+ h1+ " minutes: "+m1+ " and seconds: "+s
	
FinFuncion

Algoritmo exampleTimeConverter

		Imprimir timeConverter(4000)
		
FinAlgoritmo

## Compare distances

Funcion bool <- CompareDistances()

	p = 0
	
	n = 0
	
	c = 1
	Mientras c<=5 Hacer
	
		Imprimir "write a number"
		
		Leer n1
		
		Si n1 > 0 Entonces
		
			p = p + n1
			
			c = c + 1
			
		SiNo
			n = n + n1
			
			c = c + 1
			
		Fin Si
		
    FinMientras
    
	n = abs(n)
	
	Si p>n Entonces
	
		Imprimir True
	SiNo
	
		Imprimir Falso
		
	Fin Si
	
FinFuncion

Algoritmo exampleCompare 

	Imprimir CompareDistances()
	
FinAlgoritmo



## Sum of pairs

Funcion cantidad <- sumOfPairs
	
	i = 1
	
	cantidad = 0
	
	salir = "Falso"
	
	Mientras salir == "Falso" Hacer
		
		Imprimir " write a number between 1 and 100"
		
		leer num
		
		Si num >= 0 Y num <= 100 Entonces
			
			Si num mod 2 == 0 Entonces
				
				cantidad = cantidad + num 
			
			Fin Si
		
		SiNo
			
			Imprimir "invalid number"
			
			salir = "True"
		
		Fin Si
	
	Fin Mientras

FinFuncion



Algoritmo exampleSumOfPairs
	
	Imprimir sumOfPairs()

FinAlgoritmo

## Mid point

Funcion mitad <- midPoint(n1,n2) 
	
	mitad=n1+n2
	
	mitad=mitad/2

FinFuncion


Algoritmo exampleMidpPoint
	
	Imprimir midPoint(50,-50)

FinAlgoritmo


## Cashier

Funcion cajero <- cashier()
	
	Salir = "false"
	
	Mientras  Salir == "false" Hacer
		
		Imprimir " select an option: "
		
		Imprimir "a. to deposit."
		
		Imprimir "b. withdraw."
		
		Imprimir "c. go out."
		
		Leer op
		
		Si op == "a" Entonces
		
		        Imprimir "how much do you want to deposit: "
			
			leer deposit
			
			total = total + deposit
		
		Fin Si
		
		Si op == "b" Entonces
			
			Imprimir "how much do you want to withdraw: "
			
			leer withdraw
			
			total = total - withdraw
		
		Fin Si
		
		Si op == "c" Entonces
			
			Imprimir total
			
			Salir = "true"
		
		Fin Si
	
	Fin Mientras

FinFuncion


Algoritmo exampleCashier
	
	Imprimir cashier()

FinAlgoritmo


## Weather average

Funcion we_average <- WeatherAverage
	
	Salir = "false"
	
	celsius = 0
	
	c = 0
	
	Mientras  Salir == "false" Hacer
	
	        Imprimir " select an option: "
		
		Imprimir "a. enter degrees celsius."
		
		Imprimir "b. emter degrees fahrenheit."
		
		Imprimir "x. go out."
		
		Leer op
		
		Si op == "a" Entonces
			
			leer grados
			
			c = c + 1
			
			celsius = celsius+grados
		
		Fin Si
		
		Si op == "b" Entonces
			
			leer grados
			
			conversion = grados - 32
			
			conversion = conversion * 5
			
			conversion = conversion / 9
			
			celsius = celsius + conversion
			
			c = c + 1
		
		Fin Si
		
		Si op == "x" Entonces
			
			we_average = celsius / c
			
			Salir = "true"
		
		Fin Si
	
	Fin Mientras

FinFuncion

Algoritmo exampleWeatherAverage
          
	  Imprimir WeatherAverage

FinAlgoritmo

## 'IF' statement in JavaScript

 	<html>

	<body>

	<h2>JavaScript if .. else</h2>

	<p>A time-based greeting:</p>

	<p id="demo"></p>

	<script>
	
	//const hour = new Date().getHours(); 
	
	const hour = 16;
	
	let greeting;

	if (hour > 19) 
	{
	
  		greeting = "Good night";
	
	} 
	
	else 
	{
	
  		greeting = "You dont have to go sleep";
	
	}

	document.getElementById("demo").innerHTML = greeting;
	
	</script>

	</body>
	
	</html>
	
	
## 'WHILE' loop in JavaScript
   	
	<!DOCTYPE html>
   
  	<html>	
	
   	<body>

  	<h2>JavaScript Do While Loop</h2>

   	<p id="demo"></p>

   	<script>
	   
   	let text = ""
	   
   	let i = 1;
	   
   	let c = 1;
	   
   	let lin = "";

   	do
	   
	   {
   
	   while ( c<= i)
  
			{
   
			 lin = lin + "x"
   
			 c++;
  
			}
  
		text = text + "<br>" + lin
 
		i++;

		}

		while (i <= 5);  

	 	document.getElementById("demo").innerHTML = text;

	   </script>

           </body>

           </html>

## 'FOR' loop in JavaScript


	<!DOCTYPE html>

	<html>

	<body>

	<h2>JavaScript For Loop</h2>

	<p id="demo"></p>

	<script>

	const cars = ["BMW", "Volvo", "Saab", "Ford"];

	let i = 0;

	let len = cars.length;

	let text = "";


	for (; i < len; i++) {
  
		       if (cars[i].length == 3)
  
		       { text += cars[i]+ " " + "<br>";}

		       }


		       document.getElementById("demo").innerHTML = text;

		       </script>


	</body>

	</html>


## Week 6

Variables: https://www.jshero.net/en/koans/var.html

What is x?: https://www.jshero.net/en/koans/jsx01.html

Several variables: https://www.jshero.net/en/koans/var2.html

Reassignment: https://www.jshero.net/en/koans/jsx02.html

Assign variables: https://www.jshero.net/en/koans/jsx03.html

Functions: https://www.jshero.net/en/koans/function.html

Multiple functions: https://www.jshero.net/en/koans/function2.html

Function calls: https://www.jshero.net/en/koans/functioncall.html

What is x? (function version): https://www.jshero.net/en/koans/jsx05.html

Parameters: https://www.jshero.net/en/koans/parameter.html

Strings: https://www.jshero.net/en/koans/string.html

String: length: https://www.jshero.net/en/koans/stringlength.html

String: toUpperCase(); https://www.jshero.net/en/koans/stringupper.html

String: charAt(): https://www.jshero.net/en/koans/stringcharat.html

String: indexOf(): https://www.jshero.net/en/koans/stringindexof.html


## Week 7

Objetcs: https://www.codewars.com/kata/571f1eb77e8954a812000837/train/javascript

Return to sanity: https://www.codewars.com/kata/514a7ac1a33775cbb500001e/train/javascript

Object syntax debug: https://www.codewars.com/kata/56d8ae9237123036d3001b54/train/javascript

Extending JavaScript Objects: Get First & Last Array Element: https://www.codewars.com/kata/581351c40d8f13bc450008b8/train/javascript

Convert a String to a Number!: https://www.codewars.com/kata/544675c6f971f7399a000e79/train/javascript

Convert number to reversed array of digits: https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript

Truthy and Falsy: https://www.codewars.com/kata/595c2988d946a13298000157/train/javascript

Training JS #4: Basic data types--Array: https://www.codewars.com/kata/571effabb625ed9b0600107a/train/javascript

## Week 8

Training JS #7: if..else and ternary operator:  https://www.codewars.com/kata/57202aefe8d6c514300001fd/train/javascript

Training JS #8: conditional statement--switch: https://www.codewars.com/kata/572059afc2f4612825000d8a/train/javascript

Basic calculator:  https://www.codewars.com/kata/5296455e4fe0cdf2e000059f/train/javascript

Even or odd:  https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript

A wolf in sheep's clothing:  https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/train/javascript

Decode the morse code:  https://www.codewars.com/kata/54b724efac3d5402db00065e/train/javascript

Who likes it?:  https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript

Bit counting:  https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript

Your order, please: https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript

Counting duplicates: https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript

Encrypt this!:     https://www.codewars.com/kata/5848565e273af816fb000449/train/javascript

Valid parentheses:  https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript

Convert string to camel case: https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript

## Week 9

"this" is a problem:  https://www.codewars.com/kata/547c71fdc5b2b38db1000098/train/javascript

"Thinkful - List and Loop Drills: Lists of lists":  https://www.codewars.com/kata/586e1d458cb711f0a800033b/train/javascript

Stop gninnipS My sdroW!:   https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

"this" is an other problem:   https://www.codewars.com/kata/547f1a8d4a437abdf800055c/train/javascript

"Who likes it?":   https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript

Convert string to camel case: https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript

Easy mathematical callback: https://www.codewars.com/kata/54b7c8d2cd7f51a839000ebf/train/javascript

Moving Zeros To The End: https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

Valid Parentheses:  https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript

The Hashtag Generator: https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript

String incrementer:   https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript



## Week 12

## What is Node.JS?

Es un entorno de ejecución de JavaScript orientado a eventos asíncronos, está hecho para crear aplicaciones escalables.

## What is NPM?

NPM es parte importante de Node.js, el entorno de ejecución de javaScript en el lado del servidor basado en el motor V8 de Google. Es muy seguramente la principal razón del gran éxito de Node permitiendo que cientos de desarrolladores puedan compartir paquetes de software entre distintos proyectos.
NPM responde a las siglas de Node Package Manager o manejador de paquetes de node, es la herramienta por defecto de JavaScript para la tarea de compartir e instalar paquetes.

## What problem does Node.JS solve (Is there any problem that can be solved with Node.JS)?

Problemas de escalabilidad y acceso en tiempo real.

## What is the V8 Javascript Engine?

V8 es un motor de código abierto para JavaScript creado por Google. Cada navegador tiene su propio motor, pero con la evolución rápida de V8, otros navegadores han optado por integrarlo. Por este motivo, Microsoft Edge u Opera han decidido migrar a V8 para mejorar el rendimiento de su software.

## Is Node.JS really necessary in the Development ecosystem?

Si, ya que permite gestionar múltiples conexiones al mismo tiempo, evitando el bloqueo de procesos.

## Why not use PHP or Golang?

El rendimiento es una parte integral de todo sistema escalable, y por eso los desarrolladores adoran Node.js. 

## What is the difference between Node.JS and any other browser?

Mientras que JavaScript se utiliza como lenguaje de desarrollo del lado del cliente, Node. js cubre la programación del lado del servidor. Gracias a Node. js, JavaScript se ha convertido en un lenguaje de desarrollo de pila completa multipropósito.

## Are Node.JS and a browser the same?

No


## What is NVM and Why is it useful for Node.JS developers?

nvm. Node Version Manager es un script bash utilizado para administrar múltiples versiones lanzadas de Node. js. Permite realizar operaciones como instalar, desinstalar, cambiar de versión, etc.

## What is a Javascript Module?

Un módulo es un conjunto de funciones y objetos de JavaScript que las aplicaciones externas pueden usar. La descripción de un fragmento de código como módulo se refiere menos a lo que es el código que a lo que hace; cualquier archivo de Node.

## Why are Javascript Modules necessary?

Los módulos ES6 en JavaScript permiten partir nuestro código en distintos archivos y reutilizarlo en diferentes sitios. Para ello, utilizan la misma lógica de importación y exportación de los CommonJS Modules, pero con las palabras clave export e import. Con ellas, podemos importar elementos de muchas maneras

## What module standards are available in Node.JS?

El sistema de módulos utilizado actualmente en Node.js extiende del estándar de CommonJS, aunque hay que destacar que se están implementando otras soluciones como los módulos de ES. Sin embargo, al principio este vacío no estaba cubierto y CommonJS fue quien lo lleno.

## What are the differences between ESModules and CommonJS modules?

ES modules are the standard for JavaScript, while CommonJS is the default in Node.js 

## Which types of modules exist in Node.JS?

Built-in modules: Son los módulos nativos de la API de Node.js. No hace falta que se instalen, ya que vienen incluidos por defecto con Node.js. Algunos ejemplos son los módulos fs o stream. Estos paquetes solo son actualizados si cambias la versión de Node.js.
Local modules: Son los módulos escritos por los desarrolladores y forman en su conjunto gran parte de la aplicación. Como ya has leído, se estructuran así con la finalidad de poder ser un código reutilizable.
External modules: Son, en esencia, los paquetes de terceros distribuidos a través de npm (aunque pueden provenir de otros repositorios). Estos paquetes se instalan como dependencias y, aunque aportan funcionalidad a la aplicación, no deben incluirse en el repositorio ya que no son parte de la misma.

## Node.JS Hello World - Practice

Why do we run the npm init command and not node init to create a new Node.JS project?
Para crear el archivo package.json desde cero.

When you entered the npm init command and answered the questions you saw in the terminal, a new file called packacke.json was generated.

What does this file do?
El archivo package.json es el corazón de cualquier proyecto de Node. Registra metadatos importantes sobre un proyecto que se requiere antes de publicar en NPM y también define los atributos funcionales de un proyecto que npm usa para instalar dependencias, ejecutar scripts e identificar el punto de entrada a nuestro paquete.
Why is this file generated?
Es necesario para que node sepa las dependencias y la información del archivo.

Link del readme: https://github.com/alexsolis2/Bootcamp_answers/blob/main/hello_world_node.js
https://github.com/alexsolis2/Bootcamp_answers/blob/main/package.json

##Modules Practice
https://github.com/alexsolis2/Bootcamp_answers/tree/main/modules


## What is a Server?

Un servidor es un conjunto de computadoras los cuales son capaces de atender las peticiones de un cliente y devolverle una respuesta en concordancia. Los servidores se pueden ejecutar en cualquier tipo de computadora, incluso en computadoras dedicadas a las cuales se les conoce individualmente como «el servidor».

## What is a Client?

Un cliente es quien realiza peticiones a otro programa, el servidor, quien le da respuesta

## Is a server just another physical computer?

No también requiere de software, para poder responder las solicitudes.

## Why do we refer to a certain class of applications as Servers?
Porque reciben peticiones de ciertos clientes

## What is the difference?
EL rendimiento y tiemposde repuesta

Is there any similarity between human communication and the client-server model?
List some examples
Is the client-server model applicable only to the Web?

Do desktop applications use the client-server model?
Can you mention any other example of this model outside the Web?


## What is HTTP?
HTTP, de sus siglas en inglés: "Hypertext Transfer Protocol", es el nombre de un protocolo el 
cual nos permite realizar una petición de datos y recursos, como pueden ser documentos HTML

## What is a Communication Protocol?
Conjunto de reglas y normas que permiten que dos o más nodos de una red se comuniquen entre ellos 
para transmitir y recibir información. El protocolo más usado en internet es el TCP/IP.

## Do humans use communication protocols?
Si, tanto verbal como no verbal

## What is a Request in HTTP?
La línea de salida de una petición HTTP se conoce como línea de la petición. Siempre es la primera línea del mensaje 
de solicitud y contiene tres campos:
• Un método HTTP
• Un identificador universal de recursos (URI)
• Una versión del protocolo HTTP

Aunque hay varios métodos de HTTP para recuperar datos de un servidor, las dos más utilizados son GET y POST.

## What is a Response in HTTP?
La respuesta HTTP
Una vez que el servidor ha recibido y procesado la solicitud, éste debe devolver un mensaje de respuesta HTTP hacia el cliente.
El mensaje de respuesta se compone de una línea de estado y cero o más campos de cabecera, seguido por una línea vacía. 
También puede tener opcionalmente un cuerpo del mensaje.

## What is an HTTP method?
HTTP define un conjunto de métodos de petición para indicar la acción que se desea realizar para un recurso determinado. 
Aunque estos también pueden ser sustantivos, estos métodos de solicitud a veces son llamados HTTP verbs.

## What are HTTP request headers?
Un encabezado de solicitud es un encabezado HTTP que se puede usar en una solicitud HTTP para proporcionar información sobre el contexto de la 
solicitud, de modo que el servidor pueda adaptar la respuesta. Por ejemplo, los encabezados Aceptar-* indican los formatos permitidos y 
preferidos de la respuesta.

## What is an API?
API significa Interfaz de programación de aplicaciones . En el contexto de las API, la palabra Aplicación se refiere a cualquier software con una 
función distinta. La interfaz se puede considerar como un contrato de servicio entre dos aplicaciones. Este contrato define cómo los dos se comunican 
entre sí mediante solicitudes y respuestas.

## What is a Protocol?
Un protocolo es un conjunto de reglas: los protocolos de red son estándares y políticas formales, conformados por restricciones, procedimientos y 
formatos que definen el intercambio de paquetes de información para lograr la comunicación entre dos servidores o más dispositivos a través de una red.

## Is the term API only applicable to the communication of programs over the Internet?
No
## Why is structured communication between two programs important?
Para llevar un orden en el proceso solicitud-respuesta
## Do we humans use APIs when communicating without technology?
Si, cuando hay qe interacturar con personas que no hablan nuestro idioma
## Is an API just another program or a standard?
Standard
## Do you know any API? Can you list at least 5 examples of APIs?
Twitter Bots.
Log-In Using XYZ.
Weather Snippers.
Pay with PayPal.
Google Maps.

## What is JSON? Is JSON the same as a plain Javascript object?
JSON es un formato de texto sencillo para el intercambio de datos. Se trata de un subconjunto de la notación literal de objetos de JavaScript, aunque, debido a su amplia adopción como alternativa a XML, se considera un formato independiente del lenguaje.
No es lo mismo.

## What is REST? Is REST a programming language, framework, technology, or architecture pattern?
REST es una interfaz para conectar varios sistemas basados en el protocolo HTTP (uno de los protocolos más antiguos) y nos sirve para obtener y generar datos y operaciones, devolviendo esos datos en formatos muy específicos, como XML y JSON. Es un patrón de arquitectura.

## What is a Resource in REST? What is a resource identifier?
Un recurso en REST es un Objeto similar en la Programación Orientada a Objetos o es como una Entidad en una Base de Datos. Una vez que se identifica un recurso, se debe decidir su representación utilizando un formato estándar para que el servidor pueda enviar el recurso en dicho formato y el cliente pueda entender el mismo formato.
Se puede acceder a cada recurso de la API REST mediante un identificador uniforme de recursos (URI). El URI debe contener la información de conexión correcta para llamar correctamente a la API. La información de conexión consta del nombre de host donde se ejecuta el servicio de administración web y el número de puerto que utiliza el servicio.

## How are HTTP and REST related? What HTTP methods does REST use within its architecture rules? Why do we use HTTP methods in REST and how do they relate to resources?
REST es una interfaz para conectar varios sistemas basados en el protocolo HTTP (uno de los protocolos más antiguos) y nos sirve para obtener y generar datos y operaciones, devolviendo esos datos en formatos muy específicos, como XML y JSON. 

POST: crear un recurso nuevo.
PUT: modificar un recurso existente.
GET: consultar información de un recurso.
DELETE: eliminar un recurso determinado.
PATCH: modificar solamente un atributo de un recurso.

## Is REST the same as HTTP?
No es una interfaz para conectar sistemas basados en ese protocolo

## Answer the questions: Postman only works with REST APIs? Is there an alternative to Postman?
Tambien usa soap
si hay alternativas a postman

## Express.JS Core Understanding

const express = require('express')

const app = express()

const port = 3000

app.get('/', (req, res) => {
  
  res.send('Hello World!')

})

app.listen(port, () => {
  
  console.log(`Example app listening on port ${port}`)

})
