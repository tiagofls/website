# Tiago Santos — website pessoal

Website em português, orientado para serviços de freelancing. Construído com React e Vite, com estilos locais e sem serviços externos de fontes, imagens ou analytics.

## Desenvolvimento

```sh
npm install
npm run dev
```

```sh
npm run lint
npm run build
npm run preview
```

## Organização

- `src/components/layout/`: navegação e rodapé.
- `src/components/sections/`: início, serviços, experiência, apresentação, processo e contacto. Cada secção pode ser ajustada de forma independente.
- `src/components/ui/`: ícones, títulos e fotografia.
- `src/pages/`: página inicial e informação de privacidade.
- `src/data/site.js`: contactos, serviços, tecnologias e percurso profissional.
- `src/styles/global.css`: identidade visual e regras responsivas.
- `public/images/profile.png`: fotografia de perfil fornecida pelo Tiago.

## Conteúdo e comportamento

A experiência e a formação foram resumidas a partir do CV fornecido. As referências à Glintt Life e à PVIT são experiência profissional; não representam clientes de freelancing. Os períodos de docência são apresentados como experiências anteriores. Ainda não há casos de portefólio publicados: podemos acrescentá-los quando houver projetos e materiais autorizados.

O contacto utiliza `mailto:` e abre a aplicação de email do visitante. O botão de copiar usa a Clipboard API e apresenta uma mensagem se o navegador não permitir copiar. Não existe backend nem envio de mensagens pelo site.

A página de privacidade usa `#/privacidade`, permitindo navegação e recarregamento em alojamento estático. As secções usam âncoras. Não é preciso configurar regras de redirecionamento.

O PDF original não é disponibilizado publicamente, pois contém morada, telefone e outros dados pessoais. O email publicado é o do CV e pode ser substituído em `src/data/site.js`.

## Próximos ajustes

Rever os textos dos serviços e da secção inicial, confirmar o email de contacto pretendido, adicionar projetos de portefólio e escolher domínio e alojamento. O website ainda não foi publicado.
