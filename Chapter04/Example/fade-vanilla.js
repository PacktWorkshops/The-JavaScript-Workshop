const styles = document.querySelector('#example').style;

styles.opacity = 1;

(function fade() {
  styles.opacity -= .1;

  styles.opacity < 0
  ? styles.display = "none"
  : setTimeout(fade, 40)
})();