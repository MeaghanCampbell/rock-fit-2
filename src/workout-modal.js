import { ref } from "vue"

let showModal = ref(false)
let username = ref('')
let date = ref('')
let category = ref('')
let time = ref('')
let level = ref('')
let description = ref('')

function openModal(workout) {
    date.value = workout.date
    category.value = workout.category
    time.value = workout.time
    level.value = workout.level
    description.value = workout.description
    username.value = workout.user_name
    showModal.value = !showModal.value
}

export { 
    openModal, 
    showModal, 
    username, 
    date, 
    category, 
    time, 
    level, 
    description 
}