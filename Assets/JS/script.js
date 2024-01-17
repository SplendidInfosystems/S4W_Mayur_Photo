window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const scrolled = window.scrollY > 50; // Adjust the scroll threshold as needed

    if (scrolled) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // YouTube Video ID
  var videoId = '9hKJ9QZP4h8';

  // YouTube Player Object
  var player;

  // Function to create YouTube Player
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('video-container', {
      height: '515',
      width: '560',
      videoId: videoId,
      playerVars: {
        'autoplay': 0,
        'controls': 0,
        'showinfo': 0,
        'rel': 0,
        'showinfo': 0,
        'modestbranding': 0,
        'rel':0
      },
      events: {
        'onReady': onPlayerReady
      }
    });
  }

  // Function to handle player ready event
  function onPlayerReady(event) {
    // Hide the player initially
    event.target.pauseVideo();
  }

  // Function to play the video on thumbnail click
  function playVideo() {
    // Swap the thumbnail with the YouTube player
    document.getElementById('video-container').innerHTML = '<div id="player"></div>';
    
    // Create the YouTube player
    player = new YT.Player('player', {
      height: '315',
      width: '560',
      videoId: videoId,
      playerVars: {
        'autoplay': 1,
        'controls': 0,
        'showinfo': 0,
        'rel': 0,
        'modestbranding': 0
      },
      events: {
        'onReady': onPlayerReady
      }
    });
  }

   const images = ["./Assets/Images/702A0779.JPG", "./Assets/Images/virendra jpg_Cover.jpg", "./Assets/Images/member1.jpg"];
   let currentImageIndex = 0;
 
   function changeImage() {
     const imageContainer = document.getElementById("imageContainer");
     const image = imageContainer.querySelector("img");
     image.style.opacity = 0;
     setTimeout(() => {
       currentImageIndex = (currentImageIndex + 1) % images.length;
       image.src = images[currentImageIndex];
       setTimeout(() => {
         image.style.opacity = 1;
       }, 100);
     }, 1000);
   }
   setInterval(changeImage, 4000);