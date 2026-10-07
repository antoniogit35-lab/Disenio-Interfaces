/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.1 26/Feb/2022            */
/*******************************************/
    
/****  README:       */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		$scope.Grupo_ID ="DIU1.ABCDEF";
        $scope.Curso ="2021/22";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Paco",
                Photo: "paco.jpg",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere organizar todo el trabajo pendiente de la semana",
                touch1: "agenda",
                feel1: "2",
                con1: "Tiene demasiadas tareas pendientes",
                ima1: "cartoon-PChard.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Abre las notas del movil e intenta escribir todas las tareas que tiene",
                touch2: "Movil",
                feel2: "1",
                con2: "hay demasiadas tareas y pierde mucho tiempo, no siente que escribirlas en el movil sirva de nada",
                ima2: "cartoon-PCangry.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Decide buscar una página que le ayude a organizarse",
                touch3: "ordenador",
                feel3: "3",
                con3: "Está preocupado porque las páginas que haya sean demasiado complejas",
                ima3: "cartoon-looking.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Ve en redes sociales un anuncio de una aplicación que puede ser lo que le haga falta",
                touch4: "boca a boca",
                feel4: "5",
                con4: "Que la página que le han recomendado no sea demasiado cargante y le ayude a organizarse",
                ima4: "cartoon-PCtyping.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Empieza a probar la aplicación y a escribir sus tareas pendientes",
                touch5: "ordenador",
                feel5: "4",
                con5: "Aunque tiene un enfoque muy visual es algo distinta a otras aplicaciones que ya ha usado y necesita un periodo de adaptación",
                ima5: "cartoon-PCSurprised.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Al fin consigue organizar todas sus tareas y consigue empezar a qutarse trabajo. ¡Hurra!",
                touch6: "ordenador",
                feel6: "5",
                con6: "algunos amigos no confirmaron por lo que tuvo que seleccionar reserva con posibilidad de cancelación",
                ima6: "cartoon-PChappy.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Marcelina",
                Photo: "marcelina.webp",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere organizarse su día a día, siempre le gustó cuando estudiaba organizarse con sus post-it",
                touch1: "Pensamiento",
                feel1: "5",
                con1: "Quiere usar una aplicación que le ayude a organizarse pero las que conoce son muy complejas",
                ima1: "cartoon-teamthinking.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Comprar una agenda para ir escribiendo lo que tiene que hacer cada día",
                touch2: "Agenda",
                feel2: "4",
                con2: "Tiene que desplazarse a agencia, explica su intenciones, le llamaran porque no hay nada interesante",
                ima2: "cartoon-phoningangry.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Siempre ha sido olvidadiza y tiende a perder las cosas, ha perdido la agenda",
                touch3: "Falta de agenda",
                feel3: "1",
                con3: "Ha sido una perdida de dinero, al final lo único que nunca pierde es el móvil porque no se separa de él",
                ima3: "cartoon-PCcrying.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Una amiga del trabajo le recomienda una aplicación que usa para organizarse en el trabajo",
                touch4: "Móvil (webapp)",
                feel4: "4",
                con4: "Teme que ya que su compañera lo usa para el trabajo sea demasiado compleja para lo que busca",
                ima4: "cartoon-phone-sitting.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Se organiza los primeros días de prueba gracias a la aplicación y está bastante contenta",
                touch5: "Móvil (webapp)",
                feel5: "5",
                con5: "Hay muchas opciones que ella no necesita, supone que las usará su compañera de trabajo, por suerte no son necesarias para usar la aplicación",
                ima5: "cartoon-resting.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Consiguie organizar sus días sin perder el móvil y recordando cuando se organizaba los estudios",
                touch6: "Móvil (WebApp)",
                feel6: "5",
                con6: "Si quiere usar las funcionalidades extra tendrá que investigarlas y probar",
                ima6: "cartoon-phone.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



