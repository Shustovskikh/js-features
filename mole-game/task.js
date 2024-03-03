(() => {
    let playing = true,
      activeHole = 1,
      score = 0,
      misses = 0;
  
    const stop = () => playing = false,
      getHole = index => document.getElementById(`hole${index}`),
      deactivateHole = index =>
        getHole( index ).className = 'hole',
      activateHole = index =>
        getHole( index ).className = 'hole hole_has-mole',
      next = () => setTimeout(() => {
        if ( !playing ) {
          return;
        }
        deactivateHole( activeHole );
        activeHole = Math.floor( 1 + Math.random() * 9 );
        activateHole( activeHole );
        next();
      }, 800 ),
      updateScore = () => {
        document.getElementById('dead').textContent = score;
        document.getElementById('lost').textContent = misses;
      };
  
    for (let i = 1; i <= 9; i++) {
      getHole(i).onclick = function() {
        if (this.className.includes('hole_has-mole')) {
          score++;
          if (score === 10) {
            alert('Вы выиграли!');
            score = 0;
            misses = 0;
          }
        } else {
          misses++;
          if (misses === 5) {
            alert('Вы проиграли!');
            score = 0;
            misses = 0;
          }
        }
        updateScore();
      };
    }
  
    next();
  })();  