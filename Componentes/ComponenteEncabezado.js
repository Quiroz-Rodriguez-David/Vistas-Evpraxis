Vue.component('encabezado',{
	template:
`
<div>
	  <header>
                                        <div class="ucol_header">
                <div class="container"> 
                    <div class="logo_ucol">
                        <span class="sr-only">Universidad de Colima - <abbr title="Direcciòn General de Recursos Educativos">DGRE</abbr></span>
                    </div>
                </div>
            </div>            
            <div class="container">
                <a href="https://evpraxis.ucol.mx/" class="logo_ep" ><span class="sr-only">evPraxis - Sistema de evaluación en línea</span></a>                
                <nav class="navbar navbar-default">
                    <div class="container-fluid">
                        <!-- Brand and toggle get grouped for better mobile display -->
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <a class="navbar-brand logo_dgre" href="http://dgre2.ucol.mx/" target="new"><span class="sr-only">Dirección General de Recursos Educativos</span></a>
                        </div>

                        <!-- Collect the nav links, forms, and other content for toggling -->
                        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul class="nav navbar-nav">
                                
                                <li> <a href="agenda.html"  >Agenda</a></li>

                                                                <li  > <a href="examenes.html"  >Exámenes</a></li>
                                                                <li  > <a href="grupos.html"  >Grupos</a></li>
                                                                                                
                                                                <!-- <li  > <a href="https://evpraxis.ucol.mx/avisos/"  >Avisos</a></li> -->
                                

                            </ul>

                            <ul class="nav navbar-nav navbar-right">
                                                                <li class="dropdown">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span class="glyphicon glyphicon-user" aria-hidden="true"></span> David  <span class="caret"></span></a>
                                    <ul class="dropdown-menu">
                                        <li>
                                        <a href="https://evpraxis.ucol.mx/agenda"  >Ir a la agenda</a>                                        </li>
                                        <li>
                                        <a href="https://evpraxis.ucol.mx/papelera"  >Ir a la papelera</a>                                        </li>
                                        <li role="separator" class="divider"></li>
                                        <li>
                                            <a href="https://evpraxis.ucol.mx/index/logout"  >Cerrar sesión</a>                                        </li>
                                    </ul>
                                </li>                            </ul>
                        </div><!-- /.navbar-collapse -->
                    </div><!-- /.container-fluid -->
                </nav>
            </div>
        </header>

</div>
`
});
