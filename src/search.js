import { ref } from 'vue';
import axios from 'axios';

let errorMessage = ref(false)
let searchedWorkoutObj = ref({});
let searchedName = ref('')

let searchUserWorkouts = function() {
    if(errorMessage) {
        errorMessage.value = false
    }
    axios
        .get('http://localhost:5001/api/workouts')
        .then(response => {
        const workoutArray = response.data;
        searchedWorkoutObj.value = workoutArray.filter(workout => workout.user_name === searchedName.value);
        if (searchedWorkoutObj.value.length === 0) {
            errorMessage.value = true
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