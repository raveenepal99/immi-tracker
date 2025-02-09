<template>
  <div id="app">
    <!-- Header -->
    <header class="bg-primary text-white p-3 text-center">
      <h1>Appointment & Document Manager</h1>
    </header>

    <!-- Navigation Bar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">App</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/appointments" class="nav-link">Appointments</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/documents" class="nav-link">Documents</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="container my-4">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="bg-dark text-white p-3 text-center">
      <p>&copy; 2025 Appointment & Document Manager</p>
    </footer>
  </div>
</template>
