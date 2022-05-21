const data = [
  {
    name: 'John Doe',
    age: 32,
    gender: 'male',
    lookingfor: 'female',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/men/30.jpg'
  },
  {
    name: 'Jen Smith',
    age: 32,
    gender: 'female',
    lookingfor: 'male',
    location: 'New York NY',
    image: 'https://randomuser.me/api/portraits/women/30.jpg'
  },
  {
    name: 'Karen Stand',
    age: 50,
    gender: 'female',
    lookingfor: 'female',
    location: 'Glen MA',
    image: 'https://randomuser.me/api/portraits/women/35.jpg'
  },
  {
    name: 'Mike Jones',
    age: 22,
    gender: 'male',
    lookingfor: 'female',
    location: 'Los Angeles CA',
    image: 'https://randomuser.me/api/portraits/men/53.jpg'
  },
  {
    name: 'Martin Short',
    age: 42,
    gender: 'male',
    lookingfor: 'male',
    location: 'New York NY',
    image: 'https://randomuser.me/api/portraits/men/17.jpg'
  },
];

const profiles = profileIterator(data);
//call first profile
nextProfile();

// Next Event
document.getElementById('next').addEventListener('click', nextProfile);

//Next Profile Display
function nextProfile() {
  const currentProfile = profiles.next().value;

  if(currentProfile !== undefined) {
  document.getElementById('profileDisplay').innerHTML = `
  <ul class = "list-group">
    <li class="list-group-item">Name: ${currentProfile.name}</li>
    <li class="list-group-item">Age: ${currentProfile.age}</li>
    <li class="list-group-item">Location: ${currentProfile.location}</li>
    <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
  </ul>
    `;

    document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
  } else {
    //no more profiles
    window.location.reload();
  }
}

// Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < profiles.length ? 
      { value: profiles[nextIndex++], done: false } : 
      {done: true }
    }
  }
}