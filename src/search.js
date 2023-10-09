import { ref } from 'vue';
import axios from 'axios';

let errorMessage = ref(false)
let searchedWorkoutObj = ref({});
let searchedName = ref('')

const apiBaseURL = process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:5001/api';

const api = axios.create({
    baseURL: apiBaseURL,
});

let searchUserWorkouts = function() {
    if(errorMessage) {
        errorMessage.value = false
    }
    const lowercaseSearchQuery = searchedName.value.toLowerCase();
    api
    .get('/workouts')
    .then(response => {
        const workoutArray = response.data;
        searchedWorkoutObj.value = workoutArray.filter(workout => {
            const lowercaseUsername = workout.user_name.toLowerCase();
            return lowercaseUsername === lowercaseSearchQuery;
        });
        if (searchedWorkoutObj.value.length === 0) {
            errorMessage.value = true;
        }
    })
    .catch(error => {
        console.log(error);
    });
}

export { 
    searchUserWorkouts, 
    errorMessage, 
    searchedWorkoutObj, 
    searchedName 
}