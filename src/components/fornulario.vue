<template>
    <div class="formularios">
    <h1>A continucacion describenos tu pedido</h1>
    <label class="form" >Cual es tu nombre?</label> <br>
    <input type="text"  placeholder="nombre"  v-model="nombre">  <br>
    <p class="direccion">Direccion:</p>
    <label class="form" for="Calle" >Calle:</label> <br>
    <input type="text"  v-model="calle" >  <br>
    <label class="form" for="Colonia">Colonia:</label> <br>
    <input type="text" v-model="colonia">  <br>
    <label class="form" for="ncasa">Numero de casa:</label> <br>
    <input type="text"  v-model="ncasa">  <br>
    <label class="form" for="Municipio">Municipio:</label> <br>
    <input type="text" v-model="municipio">  <br>
    <label class="form" for="Estado">Estado:</label> <br>
    <input type="text" v-model="estado">  <br>
    <label class="form" for="cp">Codigo postal:</label> <br>
    <input type="text" v-model="cp">  <br>

    <label class="form" for="telefono">Cual es tu numero de telefono?</label><br>
    <input type="tel" v-model="telefono" maxlength="10" placeholder="--- --- -----"> <br>
    <label class="form" for="correo">Cual es tu correo electronico?</label> <br>
    <input type="email"  v-model="email" placeholder="example@example.com"><br>

    <p>Descripcion del pedido</p>
         <p class="sabores">Escoge tus sabores</p>
            <input type="checkbox" name="Relleno" id="Relleno" value="Relleno" class="sabor">
            <label for="Relleno">Relleno</label>
            <input type="checkbox" name="Fondant" id="Fondant" value="Fondant" class="sabor" >
            <label for="Fondant">Fondant</label>
            <input type="checkbox" name="chantilly" id="chantilly" value="chantilly" class="sabor">
            <label for="chantilly">Chantilly</label>
            <input type="checkbox" name="Merengue" id="Merengue" value="Merengue" class="sabor">
            <label for="Merengue">Merengue</label>
            <input type="checkbox" name="Vainilla" id="Vainilla" value="Vainilla" class="sabor">
            <label for="Vainilla">Vainilla</label>
            <input type="checkbox" name="Chocolate" id="Chocolate" value="Chocolate" class="sabor">
            <label for="Chocolate">Chocolate</label>
            <input type="checkbox" name="Fresa" id="Fresa" value="Fresa" class="sabor">
            <label for="Fresa">Fresa</label>
            <input type="checkbox" name="Limón" id="Limón" value="Limón" class="sabor">
            <label for="Limón">Limon</label>
            <input type="checkbox" name="Mermelada" id="Mermelada" value="Mermelada" class="sabor">
            <label for="Mermelada">Mermelada</label> <br>


             <p class="">Escoge tus adornos</p>
            <input type="checkbox" name="Flores" id="Flores" value="Flores" class="adorno">
            <label for="Flores">Flores</label>
            <input type="checkbox" name="Cartel" id="Cartel" value="Cartel" class="adorno">
            <label for="Cartel">Cartel</label>
            <input type="checkbox" name="Letras" id="Letras" value="Letras" class="adorno">
            <label for="Letras">Letras o frases</label>
            <input type="checkbox" name="Frutas" id="Frutas" value="Frutas" class="adorno">
            <label for="Frutas">Frutas</label>
            <input type="checkbox" name="Dulces" id="Dulces" value="Dulces" class="adorno"> 
            <label for="Dulces">Dulces</label>
            <input type="checkbox" name="Galletas" id="Galletas" value="Galletas" class="adorno">
            <label for="Galletas">Galletas</label>
            <input type="checkbox" name="Juguetes" id="Juguetes" value="Juguetes" class="adorno">
            <label for="Juguetes">Juguetes</label>
            <input type="checkbox" name="figuras" id="figuras" value="figuras" class="adorno">
            <label for="figuras">Figuras con Fondant</label>
            <input type="checkbox" name="Velas" id="Velas" value="Velas" class="adorno">
            <label for="Velas">Velas</label>

            <p>Si tienes alguna descripcion para el diseño de tu pastel, 
                por favor especificalo a continuacion</p>
            <textarea id="" cols="90" rows="10" v-model="descripcion"></textarea>
    <div>
        <button @click="$store.dispatch('addnombreaction',this.nombre);$store.dispatch('addcalleaction',this.calle);$store.dispatch('addcoloniaeaction',this.colonia)
        ;$store.dispatch('addcasaeaction',this.ncasa);$store.dispatch('addmunicipio',this.municipio);$store.dispatch('addestado',this.estado)
        ;$store.dispatch('addcp',this.cp);$store.dispatch('addtelefono',this.telefono);$store.dispatch('addemail',this.email);$store.dispatch('addsabores');
        $store.dispatch('addadornos');$store.dispatch('adddesc',this.descripcion)"> 
          Aceptar
          </button>
    </div>
    
    </div>
    
</template>

<script>
export default {
    name:'formulario'


}
</script>