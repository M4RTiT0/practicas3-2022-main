<template>
<nav class="navbar navbar-expand-lg bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand text-muted" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link text-light" to="/">Casita</router-link> 
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-light" to="/about">Mas</router-link> 
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-light" to="/Clientes">Clientes</router-link> 
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-light" to="/Productos">Producto</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div class="container mt-3
">
  <router-view/>
</div>
</template>