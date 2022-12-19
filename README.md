## Bootcamp_answers
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
			
			Imprimir "Just a regular number"
		  
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

##Algoritmo MultiOptionProgram

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

##Algoritmo AscendingandDescendingNumbers
	
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


##Algoritmo TossCoin

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

##Funcion dalevuelta <- ReverseDirectionAndSize(cadena)
	
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
