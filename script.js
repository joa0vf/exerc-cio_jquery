$(document).ready(function(){
   $('form').on('submit', function(e){
      e.preventDefault() /*Faz com que a página não atualize automaticamente após clicar no botão de submit */
   
      const inputNovaTarefa = $('#inputNovaTarefa').val() /*Pega o valor do input */
      if(inputNovaTarefa !== ''){
         $('#listaTarefas').append('<li>' + inputNovaTarefa)
         $('#inputNovaTarefa').val('')
      }
   })

   $(document).on('click', 'li', function() {
      $(this).toggleClass('concluido');
  });
})
