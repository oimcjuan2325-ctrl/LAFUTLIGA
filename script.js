const USUARIO_CORRECTO = "Juan";
const CONTRASEÑA_CORRECTA = "2305";

// BASE DE DATOS REAL DE PARTIDOS POR JORNADA
const partidosJornadas = {
    "1": [
        { local: "Athletic Club", res: "1 - 1", visitante: "Getafe" },
        { local: "Real Betis", res: "1 - 1", visitante: "Girona" },
        { local: "RCD Mallorca", res: "1 - 1", visitante: "Real Madrid" },
        { local: "Valencia CF", res: "1 - 2", visitante: "FC Barcelona" },
        { local: "Villarreal CF", res: "2 - 2", visitante: "Atlético de Madrid" },
        { local: "Celta de Vigo", res: "2 - 1", visitante: "Deportivo Alavés" },
        { local: "UD Las Palmas", res: "2 - 2", visitante: "Sevilla FC" },
        { local: "CA Osasuna", res: "1 - 1", visitante: "CD Leganés" },
        { local: "Real Sociedad", res: "1 - 2", visitante: "Rayo Vallecano" },
        { local: "Real Valladolid", res: "1 - 0", visitante: "RCD Espanyol" }
    ],
    "2": [
        { local: "FC Barcelona", res: "2 - 1", visitante: "Athletic Club" },
        { local: "Real Madrid", res: "3 - 0", visitante: "Real Valladolid" },
        { local: "Atlético de Madrid", res: "3 - 0", visitante: "Girona" },
        { local: "Getafe", res: "0 - 0", visitante: "Rayo Vallecano" },
        { local: "Celta de Vigo", res: "3 - 1", visitante: "Valencia CF" },
        { local: "Sevilla FC", res: "1 - 2", visitante: "Villarreal CF" },
        { local: "CD Leganés", res: "2 - 1", visitante: "UD Las Palmas" },
        { local: "Deportivo Alavés", res: "0 - 0", visitante: "Real Betis" },
        { local: "RCD Espanyol", res: "0 - 1", visitante: "Real Sociedad" },
        { local: "CA Osasuna", res: "1 - 0", visitante: "RCD Mallorca" }
    ],
    "3": [
        { local: "UD Las Palmas", res: "1 - 1", visitante: "Real Madrid" },
        { local: "Rayo Vallecano", res: "1 - 2", visitante: "FC Barcelona" },
        { local: "Athletic Club", res: "1 - 0", visitante: "Valencia CF" },
        { local: "Girona", res: "4 - 0", visitante: "CA Osasuna" },
        { local: "Real Betis", res: "1 - 2", visitante: "Getafe" },
        { local: "Real Sociedad", res: "1 - 2", visitante: "Deportivo Alavés" },
        { local: "RCD Mallorca", res: "0 - 0", visitante: "Sevilla FC" },
        { local: "Real Valladolid", res: "0 - 0", visitante: "CD Leganés" },
        { local: "Villarreal CF", res: "4 - 3", visitante: "Celta de Vigo" },
        { local: "Atlético de Madrid", res: "0 - 0", visitante: "RCD Espanyol" }
    ],
    "4": [
        { local: "FC Barcelona", res: "7 - 0", visitante: "Real Valladolid" },
        { local: "Real Madrid", res: "2 - 0", visitante: "Real Betis" },
        { local: "Athletic Club", res: "0 - 1", visitante: "Atlético de Madrid" },
        { local: "Sevilla FC", res: "0 - 2", visitante: "Girona" },
        { local: "Valencia CF", res: "1 - 1", visitante: "Villarreal CF" },
        { local: "CD Leganés", res: "0 - 1", visitante: "RCD Mallorca" },
        { local: "CA Osasuna", res: "3 - 2", visitante: "Celta de Vigo" },
        { local: "Deportivo Alavés", res: "2 - 0", visitante: "UD Las Palmas" },
        { local: "RCD Espanyol", res: "2 - 1", visitante: "Rayo Vallecano" },
        { local: "Getafe", res: "0 - 0", visitante: "Real Sociedad" }
    ],
    "5": [
        { local: "Girona", res: "1 - 4", visitante: "FC Barcelona" },
        { local: "Real Sociedad", res: "0 - 2", visitante: "Real Madrid" },
        { local: "Atlético de Madrid", res: "3 - 0", visitante: "Valencia CF" },
        { local: "Real Betis", res: "2 - 0", visitante: "CD Leganés" },
        { local: "RCD Mallorca", res: "1 - 2", visitante: "Villarreal CF" },
        { local: "Sevilla FC", res: "1 - 0", visitante: "Getafe" },
        { local: "Rayo Vallecano", res: "3 - 1", visitante: "CA Osasuna" },
        { local: "Celta de Vigo", res: "3 - 1", visitante: "Real Valladolid" },
        { local: "UD Las Palmas", res: "2 - 3", visitante: "Athletic Club" },
        { local: "RCD Espanyol", res: "3 - 2", visitante: "Deportivo Alavés" }
    ]
};

function iniciarSesion(event) {
    event.preventDefault();
    const user = document.getElementById('username').value.trim();
    const pass = document.getElementById('password').value.trim();

    if (user === USUARIO_CORRECTO && pass === CONTRASEÑA_CORRECTA) {
        document.getElementById('login-screen').classList.add('hidden');
        document.getElementById('app-screen').classList.remove('hidden');
        cargarPartidosJornada("1");
    } else {
        document.getElementById('error-msg').classList.remove('hidden');
    }
}

function cerrarSesion() {
    document.getElementById('app-screen').classList.add('hidden');
    document.getElementById('login-screen').classList.remove('hidden');
}

function cargarPartidosJornada(jornada) {
    const container = document.getElementById('partidos-container');
    container.innerHTML = '';
    const lista = partidosJornadas[jornada] || [];

    if (lista.length === 0) {
        container.innerHTML = '<p style="text-align:center; padding: 2rem;">No hay datos para esta jornada.</p>';
        return;
    }

    lista.forEach(p => {
        const div = document.createElement('div');
        div.className = 'partido-card';
        div.innerHTML = `
            <span class="equipo local">${p.local}</span>
            <span class="resultado">${p.res}</span>
            <span class="equipo visitante">${p.visitante}</span>
        `;
        container.appendChild(div);
    });
}
