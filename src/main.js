import { memory } from './memory-game';
import './styles.css';


$(document).ready(function() {
    $("form#memory").submit(function(event) {
        var memory = $(".").val();
        event.preventDefault();
      });
   
});