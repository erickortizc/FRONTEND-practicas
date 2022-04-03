<template>
    <div>
         {{$store.state.contador}}
    
    
      
      
      {{$store.state.sabores}}
      {{$store.state.adornos}}
     
        <p class="pedidos">Informacion del pedido</p>
       <table class="pedido" border="1">
        <tr>
            <td id="pedido" class="pedidos">Campo</td>
            <td id="pedido" class="pedidos">  Informacion: </td>
        </tr>
        <tr>
            <td id="pedido" class="pedidos">Numero de pedido:</td>
            <td id="pedido" class="pedidos">   1 </td>
        </tr>
        <tr>
            <td id="pedido" class="pedidos">Nombre:</td>
            <td id="pedido" class="pedidos">   {{$store.state.nombre}} </td>
        </tr>
        <tr>
            <td id="pedido" class="pedidos">Direccion:</td>
            <td id="pedido" class="pedidos">    {{$store.state.calle}},
                                                {{$store.state.colonia}},
                                                {{$store.state.casa}},
                                                {{$store.state.municipio}},
                                                {{$store.state.estado}},
                                                {{$store.state.codigopostal}}   </td>
        </tr>
        <tr>
            <td id="pedido" class="pedidos">Telefono:</td>
            <td id="pedido" class="pedidos">  {{$store.state.telefono}}  </td>
        </tr>
        <tr>
            <td id="pedido" class="pedidos">Correo electronico:</td>
            <td id="pedido" class="pedidos">  {{$store.state.email}}  </td>
        </tr>
        <tr>
            <td id="pedido" class="pedidos">Sabores:</td>
            <td id="pedido" class="pedidos">  </td>
        </tr>
        <tr>
            <td id="pedido" class="pedidos">Adornos:</td>
            <td id="pedido" class="pedidos">    </td>
        </tr>
               <tr>
            <td id="pedido" class="pedidos">Descripcion:</td>
            <td id="pedido" class="pedidos">   {{$store.state.descripcion}}  </td>
        </tr>
       </table>
       <button>Siguiente pedido</button>

        <p class="sabores">Los sabores que te quedan disponibles son: </p>
        <table class="sabor" border="1">
          <tr>
              <td>Sabor:</td>
              <td>Cantidad del sabor</td>
          </tr>
          <tr>
              <td id="sabor">Relleno:</td>
              <td id="cantidadsabor" ></td>
          </tr>  
          <tr>
            <td id="sabor">Fondant:</td>
            <td id="cantidadsabor" ></td>
        </tr>  
        <tr>
            <td id="sabor">Chantilly:</td>
            <td id="cantidadsabor" ></td>
        </tr>  
        <tr>
            <td id="sabor">Merengue:</td>
            <td id="cantidadsabor" ></td>
        </tr>  
        <tr>
            <td id="sabor">Vainilla:</td>
            <td id="cantidadsabor" ></td>
        </tr>  
        <tr>
            <td id="sabor">Chocolate:</td>
            <td id="cantidadsabor" > </td>
        </tr>  
        <tr>
            <td id="sabor">Fresa:</td>
            <td id="cantidadsabor" ></td>
        </tr>  
        <tr>
            <td id="sabor">Limón:</td>
            <td id="cantidadsabor" ></td>
        </tr>
        <tr>
            <td id="sabor">Mermelada:</td>
            <td id="cantidadsabor" ></td>
        </tr>  
        </table>

    </div>
</template>