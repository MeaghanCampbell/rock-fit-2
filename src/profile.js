import { ref } from "vue";
import axios from 'axios';

let userWorkoutObj = ref({});

let benchmark = ref(false)
let boulder_grade = ref('')
let route_grade = ref('')
let benchmarkId = ''

let showModal = ref(false)
let showAddModal = ref(false)
let showBenchmarkModal = ref(false)

let workouts = ref(false)
let username = ref('')
let date = ref('')
let category = ref('')
let time = ref('')
let level = ref('')
let description = ref('')
let workoutId = ''

function openModal(workout) {
    workoutId = workout._id
    date.value = workout.date
    category.value = workout.category
    time.value = workout.time
    level.value = workout.level
    description.value = workout.description
    showModal.value = true
}

function closeModal() {
    date.value = ''
    category.value = ''
    time.value = ''
    level.value = ''
    description.value = ''
    showModal.value = false
}

function toggleAddModal() {
    showAddModal.value = !showAddModal.value
}

function toggleBenchmark() {
    showBenchmarkModal.value = !showBenchmarkModal.value
}

const logOut = function() {
    localStorage.removeItem('token');
    window.location.replace('/login');
}

function addBenchmark() {
    const token = localStorage.getItem('token');
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const requestBody = {
        boulder_grade: boulder_grade.value,
        route_grade: route_grade.value
    }
    axios.post('/api/benchmarks', requestBody, config)
    .then(response => {
        showBenchmarkModal.value = false
        window.location.reload()
    })
    .catch(error => {
        console.log(error);
    });
}

function updateBenchmark() {

    const token = localStorage.getItem('token');
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const requestBody = {
        boulder_grade: boulder_grade.value,
        route_grade: route_grade.value
    }
    axios.put(`/api/benchmarks/${benchmarkId}`, requestBody, config) 
    .then(response => {
        showBenchmarkModal.value = false
    })
    .catch(error => {
        console.log(error)
    });

}

function addWorkout() {
    const token = localStorage.getItem('token');
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const requestBody = {
        date: date._rawValue,
        category: category._rawValue,
        time: parseInt(time._rawValue),
        level: level._rawValue,
        description: description._rawValue
    }
    axios.post('/api/workouts', requestBody, config)
    .then(response => {
        showAddModal.value = false
        window.location.reload()
    })
    .catch(error => {
        console.log(error);
    });
}

const deleteWorkout = function() {
    const token = localStorage.getItem('token');
    axios.delete(`/api/workouts/${workoutId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then(response => {
        showModal.value = false
        window.location.reload()
    })
    .catch(error => {
        console.log(error);
    });
}

const loadData = function() {
    const token = localStorage.getItem('token');
    axios.get('/api/users/current', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then(response => {
        if (response.data.benchmark[0]) {
            benchmark.value = true 
            route_grade.value = response.data.benchmark[0].route_grade
            boulder_grade.value = response.data.benchmark[0].boulder_grade
            benchmarkId = response.data.benchmark[0]._id
        }
        if (response.data.workouts[0]) {
            workouts.value = true
            username.value = response.data.currentUser.username
            const userWorkoutArray = response.data.workouts;
            const newObj = {};
            for (let i = 0; i < userWorkoutArray.length; i++) {
                const userWorkoutObject = userWorkoutArray[i];
                newObj['userWorkoutObject' + i] = userWorkoutObject;
            }
            userWorkoutObj.value = newObj;
        }
    })
    .catch(error => {
        console.log(error);
    });
}

export {
    loadData,
    deleteWorkout,
    addWorkout,
    updateBenchmark,
    addBenchmark,
    toggleBenchmark,
    logOut,
    openModal,
    closeModal,
    toggleAddModal,
    userWorkoutObj,
    benchmark,
    boulder_grade,
    route_grade,
    benchmarkId,
    showModal,
    showAddModal,
    showBenchmarkModal,
    workouts,
    username,
    date,
    category,
    time,
    level,
    description,
    workoutId
}