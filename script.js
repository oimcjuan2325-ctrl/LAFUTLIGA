const USUARIO_CORRECTO = "Juan";
const CONTRASEÑA_CORRECTA = "2305";

// DATOS DE EJEMPLO DE LA TEMPORADA 2026-2027
const partidosJornadas = {
    "1": [
        { local: "Real Madrid", visitante: "FC Barcelona", hora: "21:00" },
        { local: "Atlético de Madrid", visitante: "Athletic Club", hora: "18:30" },
        { local: "Real Sociedad", visitante: "Real Betis", hora: "16:15" }
    ],
    "2": [
        { local: "FC Barcelona", visitante: "Atlético de Madrid", hora: "21:00" },
        { local: "Athletic Club", visitante: "Real Sociedad", hora: "18:30" },
        { local: "Real Betis", visitante: "Real Madrid", hora: "16:15" }
    ],
    "3": [
        { local: "Real Madrid", visitante: "Real Sociedad", hora: "21:00" },
        { local: "FC Barcelona", visitante: "Athletic Club", hora: "18:30" },
        { local: "Real Betis", visitante: "Atlético de Madrid", hora: "16:15" }
    ]
};

const datosEquipos = [
    {
        id: "rmadrid",
        nombre: "Real Madrid",
        escudo: "https://via.placeholder.com/60?text=RMA",
        entrenador: { nombre: "Carlo Ancelotti", foto: "https://via.placeholder.com/60?text=DT" },
        estrategia: "4-3-3",
        titulares: [
            // Portero
            [{ nombre: "Courtois", foto: "https://via.placeholder.com/45?text=GK" }],
            // Defensa
            [
                { nombre: "Carvajal", foto: "https://via.placeholder.com/45?text=DF" },
                { nombre: "Militao", foto: "https://via.placeholder.com/45?text=DF" },
                { nombre: "Rüdiger", foto: "https://via.placeholder.com/45?text=DF" },
                { nombre: "Mendy", foto: "https://via.placeholder.com/45?text=DF" }
            ],
            // Centro
            [
                { nombre: "Valverde", foto: "https://via.placeholder.com/45?text=MC" },
                { nombre: "Tchouaméni", foto: "https://via.placeholder.com/45?text=MC" },
                { nombre: "Bellingham", foto: "https://via.placeholder.com/45?text=MC" }
            ],
            // Delantera
            [
                { nombre: "Rodrygo", foto: "https://via.placeholder.com/45?text=DC" },
                { nombre: "Mbappé", foto: "https://via.placeholder.com/45?text=DC" },
                { nombre: "Vinicius Jr", foto: "https://via.placeholder.com/45?text=DC" }
            ]
        ],
        suplentes: [
            { nombre: "Lunin", foto: "https://via.placeholder.com/40?text=SUP" },
            { nombre: "Camavinga", foto: "https://via.placeholder.com/40?text=SUP" },
            { nombre: "Modrić", foto: "https://via.placeholder.com/40?text=SUP" },
            { nombre: "Güler", foto: "https://via.placeholder.com/40?text=SUP" },
            { nombre: "Endrick", foto: "https://via.placeholder.com/40?text=SUP" }
        ]
    },
    {
        id: "barca",
        nombre: "FC Barcelona",
        escudo: "https://via.placeholder.com/60?text=FCB",
        entrenador: { nombre: "Hansi Flick", foto: "https://via.placeholder.com/60?text=DT" },
        estrategia: "4-2-3-1",
        titulares: [
            [{ nombre: "Ter Stegen", foto: "https://via.placeholder.com/45?text=GK" }],
            [
                { nombre: "Koundé", foto: "https://via.placeholder.com/45?text=DF" },
                { nombre: "Araujo", foto: "https://via.placeholder.com/45?text=DF" },
                { nombre: "Cubarsí", foto: "https://via.placeholder.com/45?text=DF" },
                { nombre: "Balde", foto: "https://via.placeholder.com/45?text=DF" }
            ],
            [
                { nombre: "De Jong", foto: "https://via.placeholder.com/45?text=MC" },
                { nombre: "Pedri", foto: "https://via.placeholder.com/45?text=MC" }
            ],
            [
                { nombre: "Lamine Yamal", foto: "https://via.placeholder.com/45?text=DC" },
                { nombre: "Olmo", foto: "https://via.placeholder.com/45?text=DC" },
                { nombre: "Raphinha", foto: "https://via.placeholder.com/45?text=DC" }
            ],
            [
                { nombre: "Lewandowski", foto: "https://via.placeholder.com/45?text=DC" }
            ]
        ],
        suplentes: [
            { nombre: "Iñaki Peña", foto: "https://via.placeholder.com/40?text=SUP" },
            { nombre: "Gavi", foto: "https://via.placeholder.com/40?text=SUP" },
            { nombre: "Fermín", foto: "https://via.placeholder.com/40?text=SUP" },
            { nombre: "Ferran", foto: "https://via.placeholder.com/40?text=SUP" }
        ]
    }
];

function iniciarSesion(event) {
    event.preventDefault();
    const user = document.getElementById('username').value.trim();
    const pass = document.getElementById('password').value.trim();

    if (user === USUARIO_CORRECTO && pass === CONTRASEÑA_CORRECTA) {
        document.getElementById('login-screen').classList.add('hidden');
        document.getElementById('app-screen').classList.remove('hidden');
        cargarPartidosJornada("1");
        cargarListaEquipos();
    } else {
        document.getElementById('error-msg').classList.remove('hidden');
    }
}

function cerrarSesion() {
    document.getElementById('app-screen').classList.add('hidden');
    document.getElementById('login-screen').classList.remove('hidden');
}

function mostrarSeccion(sec) {
    document.getElementById('sec-partidos').classList.add('hidden');
    document.getElementById('sec-equipos').classList.add('hidden');
    document.getElementById('nav-btn-partidos').classList.remove('active');
    document.getElementById('nav-btn-equipos').classList.remove('active');

    if (sec === 'partidos') {
        document.getElementById('sec-partidos').classList.remove('hidden');
        document.getElementById('nav-btn-partidos').classList.add('active');
    } else {
        document.getElementById('sec-equipos').classList.remove('hidden');
        document.getElementById('nav-btn-equipos').classList.add('active');
    }
}

function cargarPartidosJornada(jornada) {
    const container = document.getElementById('partidos-container');
    container.innerHTML = '';
    const lista = partidosJornadas[jornada] || [];

    lista.forEach(p => {
        const div = document.createElement('div');
        div.className = 'partido-card';
        div.innerHTML = `
            <span><strong>${p.local}</strong></span>
            <span>vs</span>
            <span><strong>${p.visitante}</strong></span>
            <small>🕒 ${p.hora}</small>
        `;
        container.appendChild(div);
    });
}

function cargarListaEquipos() {
    const grid = document.getElementById('equipos-grid');
    grid.innerHTML = '';

    datosEquipos.forEach(eq => {
        const div = document.createElement('div');
        div.className = 'equipo-card-select';
        div.onclick = () => verDetalleEquipo(eq.id);
        div.innerHTML = `
            <img src="${eq.escudo}" alt="${eq.nombre}">
            <h4>${eq.nombre}</h4>
        `;
        grid.appendChild(div);
    });
}

function verDetalleEquipo(idEquipo) {
    const eq = datosEquipos.find(e => e.id === idEquipo);
    if (!eq) return;

    document.getElementById('equipos-grid').classList.add('hidden');
    const detalle = document.getElementById('detalle-equipo');
    detalle.classList.remove('hidden');

    document.getElementById('equipo-nombre-titulo').innerText = eq.nombre;
    document.getElementById('entrenador-foto').src = eq.entrenador.foto;
    document.getElementById('entrenador-nombre').innerText = eq.entrenador.nombre;
    document.getElementById('formacion-texto').innerText = eq.estrategia;

    // Pintar Campo de Fútbol con las líneas
    const campo = document.getElementById('campo-futbol');
    campo.innerHTML = '';

    eq.titulares.forEach(linea => {
        const divLinea = document.createElement('div');
        divLinea.className = 'linea-campo';
        
        linea.forEach(jugador => {
            const divJugador = document.createElement('div');
            divJugador.className = 'jugador-pos';
            divJugador.innerHTML = `
                <img src="${jugador.foto}" alt="${jugador.nombre}">
                <span>${jugador.nombre}</span>
            `;
            divLinea.appendChild(divJugador);
        });
        
        campo.appendChild(divLinea);
    });

    // Pintar Suplentes
    const supGrid = document.getElementById('suplentes-grid');
    supGrid.innerHTML = '';
    eq.suplentes.forEach(sup => {
        const divSup = document.createElement('div');
        divSup.className = 'suplente-card';
        divSup.innerHTML = `
            <img src="${sup.foto}" alt="${sup.nombre}">
            <div>${sup.nombre}</div>
        `;
        supGrid.appendChild(divSup);
    });
}

function volverAEquipos() {
    document.getElementById('detalle-equipo').classList.add('hidden');
    document.getElementById('equipos-grid').classList.remove('hidden');
}
