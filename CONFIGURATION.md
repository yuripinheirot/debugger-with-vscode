# Configuração do Debugger com VSCode
Siga esses passos para configurar o debugger com o VSCode:

1. Adicione a configuração launch.json no seu projeto:
``` JSON
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "name": "My Debugger",
      "request": "attach",
      "port": 9229,
      "remoteRoot": "/home/debugger/app", // necessario somente para docker
      "restart": true
    }
  ]
}
```

2. Se estiver utilizando docker, abra a porta 9229 no container para permitir a conexão do debugger.

3. Adicione o parâmetro ```--inspect=0.0.0.0:9229``` no script de inicialização da sua aplicação.

4. Certifique-se de que os sourcemaps no tsconfig estão habilitados para uma melhor experiência de debugging.

Agora você está pronto para utilizar o debugger do VSCode para depurar suas aplicações Node.js com mais eficiência.