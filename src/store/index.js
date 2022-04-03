import { createStore } from 'vuex'

export default createStore({
  state: {
    contador : 0,
    numero: 10,
    nombre: 'defult',
    calle:'asa',
    colonia:'',
    casa:'',
    municipio:'',
    estado:'',
    codigopostal:'',
    telefo:'',
    email:'',
    sabores: ['Chantiyin','Fresa'],
    adornos:[],
    descripcion :''
  },
  getters: {
    
  },
  mutations: {
    cambiar_nombre(state,newnombre) {
      state.nombre = newnombre;
      console.log(state.nombre);
      
  },
    cambiar_calle(state,newcalle)
    {
      state.calle = newcalle;
      console.log(state.calle);
    },
    cambiar_colonia(state, newcolonia)
  {
    state.colonia = newcolonia;
    console.log(state.colonia);
  },
  cambiar_casa(state, newncasa)
  {
    state.casa = newncasa;
    console.log(state.casa);
  },
  cambiar_municpio(state, municipio)
  {
    state.municipio = municipio;
    console.log(state.municipio);
  },
  cambiar_estado(state, estado)
  {
    state.estado = estado;
    console.log(state.estado);
  },
  cambiar_cp(state, cp)
  {
    state.codigopostal = cp;
    console.log(state.codigopostal);
  },  
  cambiar_telefono(state, telefono)
  {
    state.telefono = telefono;
    console.log(state.telefono);
  }, 
  cambiar_email(state, email)
  {
    state.email = email;
    console.log(state.email);
  }, 
  cambiar_sabores (state)
  {
    state.sabores=[];
    var checks = document.querySelectorAll('.sabor');
    checks.forEach((e)=> {
      if(e.checked==true)
      {
          state.sabores=[e.value,...state.sabores];
          console.log(e.value);
      }
     
  });
  },cambiar_adornos (state)
  {
    state.adornos=[];
    var checks = document.querySelectorAll('.adorno');
    checks.forEach((e)=> {
      if(e.checked==true)
      {
          state.adornos=[e.value,...state.adornos];
          console.log(e.value);
      }
     
  });
  },
  cambiar_descripcion(state, value)
  {
    state.descripcion = value;
    console.log(state.descripcion);
  },
  
  },
  actions: {
    async subircontador ({commit})
    {
      commit("subircontador")
    },
    async addnombreaction({commit},nombre)
    {
      commit('cambiar_nombre',nombre);
    },
    async addcalleaction({commit},calle)
    {
      commit('cambiar_calle',calle);
    },
    async addcoloniaeaction({commit},colonia)
    {
      commit('cambiar_colonia',colonia);
    },
    async addcasaeaction({commit},casa)
    {
      commit('cambiar_casa',casa);
    },
    async addmunicipio({commit},value)
    {
      commit('cambiar_municpio',value);
    },
    async addestado({commit},value)
    {
      commit('cambiar_estado',value);
    },
    async addcp({commit},value)
    {
      commit('cambiar_cp',value);
    },
    async addtelefono({commit},value)
    {
      commit('cambiar_telefono',value);
    },
    async addemail({commit},value)
    {
      commit('cambiar_email',value);
    },
    async addsabores({commit})
    {
      commit('cambiar_sabores');
    },
    async addadornos({commit})
    {
      commit('cambiar_adornos');
    }, async adddesc({commit},value)
    {
      commit('cambiar_descripcion',value);
    },
  },
  modules: {
  }

});


