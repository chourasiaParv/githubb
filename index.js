const urll = 'https://api.github.com/users'
const searchInput =document.getElementById('searchInput')
const searchBtn =document.getElementById('search-btn')
const follower = document.getElementById('follower')
const profileContainter = document.getElementById('profileContainer')
const login = document.getElementById('login')

const generateProfile = (profile)=>{
    return `
        <div class="profile-box">
        <div class="top-section">
            <div class="left">
                <div  class="avtar">
                    <img alt="avtar" src="${profile.avatar_url}"/>
                </div>
                <div class="self">
                    <h1>${profile.name}</h1>
                    <h1>${profile.login}</h1>
                    
                </div>
            </div>
            <a href = "${profile.html_url}">
            <button class="primary-btn">Check Profile</button>
            </a>
        </div>
        <div class="about">
            <h2>About</h2>
            <p>${profile.bio}</p>
        </div>
        <div class="status">
            <div class="status-item">
                <h3>Followers</h3>
                <p>${profile.followers}</p>
            </div>
            <div class="status-item">
                <h3>Followings</h3>
                <p>${profile.following}</p>
            </div>
            <div class="status-item">
                <h3>Repos</h3>
                <p>${profile.public_repos}</p>
            </div>
        </div>
       </div> 
   ` 
}


const fetchProfile = async()=>{

    const userName = searchInput.value;
    login.innerText = "loading...."
    login.style.color ='black';






    try{
        const res = await fetch(`${urll}/${userName}`)
        const data = await res.json();

        if(data.bio){
            login.innerText = "";
            profileContainter.innerHTML = generateProfile(data)
            
        }else {
        login.innerText = data.message;
        login.style.color ='red'
        profileContainter.innerText = ""; 
        console.log('data , with', data);
        
        }
        

    }
    catch(error){
        console.log({error});
        login.innerText = ""

    }

}
searchBtn.addEventListener('click', fetchProfile);