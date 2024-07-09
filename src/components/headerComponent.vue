<template>
  <header>
    <div class="linha">
      <div class="coluna">
        <nav class="jm jm-menu nav-maior none" id="menu">
          <div class="separador">
            <a href="http://compras-homologacao.thalamus.ind.br:8080/" class=""
              >Compras</a
            >
            <a href="http://projetos-homologacao.thalamus.ind.br/#/">Tarefas</a>
            <a href="http://monitoramento-homologacao.thalamus.ind.br/"
              >Monitoramento</a
            >
            <a href="http://acesso-homologacao.thalamus.ind.br/#/">Acesso</a>
            <a href="http://indicadores-homologacao.thalamus.ind.br/#/"
              >Indicadores</a
            >
            <a href="http://painel-injecao-homologacao.thalamus.ind.br/"
              >Painel injeção</a
            >
          </div>
        </nav>
        <a
          href="http://portal-homologacao.thalamus.ind.br/#/"
          class="logo logo-menor"
          >Thalamus</a
        >
        <a
          href="#"
          class="icone-avancar negrito com-texto"
          onclick="document.getElementById('menu').classList.toggle('none');this.classList.toggle('ativo');return false"
          >Tarefas</a
        >
      </div>

      <div class="coluna">
        <a
          href="#"
          class="avatar direita"
          onclick="document.getElementById('usuario').classList.toggle('none');this.classList.toggle('ativo');return false"
          :title="user.nome"
          ><img src="https://cdn-icons-png.flaticon.com/128/709/709722.png" />
        </a>

        <nav class="jm jm-avatar none" id="usuario">
          <div class="separador margem alinha-centro negrito">
            {{ user.nome }}
          </div>
          <div class="separador">
            <a
              href="#"
              onclick="document.documentElement.classList.toggle('dark');this.classList.toggle('ativo');return false"
              ><span class="direita toggle"></span>Tema escuro</a
            >
          </div>
          <div class="separador bg-cinza">
            <!-- <a href="#">Ajuda</a> -->
            <!-- <a href="#">Alterar senha</a> -->
            <a
              href="http://portal-homologacao.thalamus.ind.br/#/"
              @click="logout()"
              >Sair</a
            >
          </div>
        </nav>
        <!-- <a
            href="#"
            class="icone-notif direita"
            title="Notificações"
            onclick="document.getElementById('notificacoes').classList.toggle('none');this.classList.toggle('ativo');return false"
          ></a> -->

        <a href="#" class="icone-notif direita" title="Notificações"></a>

        <!-- <nav class="jm jm-notif none" id="notificacoes">
            <div class="separador">
              <a href="#"
                    ><span class="fonte-fraca fonte-menor direita">12min</span>Título
                    da notificação</a
                  >
                  <a href="#"
                    ><span class="fonte-fraca fonte-menor direita">2h</span>Título da
                    notificação</a
                  >
            </div>
          </nav> -->
      </div>
    </div>
  </header>
</template>

<script>
import { sso } from "roboflex-thalamus-sso-lib";

export default {
  data() {
    return {
      user: null,
    };
  },
  created() {
    this.user = sso.getUsuarioLogado();
  },
  methods: {
    logout() {
      sso.logout();
    },
  },
};
</script>
