// Conteúdo público: editar aqui os serviços, percurso e contactos.
export const profile = { name: 'Tiago Santos', email: 'tiagosantos350@sapo.pt', location: 'Portugal', photo: '/images/profile.png' }
export const navigation = [{ label: 'Serviços', href: '#servicos' }, { label: 'Experiência', href: '#experiencia' }, { label: 'Sobre mim', href: '#sobre' }]
export const services = [
  { number: '01', icon: 'web', title: 'Websites & aplicações web', description: 'Uma presença online à medida do teu negócio. De um website de apresentação a uma aplicação com funcionalidades específicas.', tags: ['Websites', 'Aplicações web', 'Interfaces responsivas'] },
  { number: '02', icon: 'mobile', title: 'Aplicações mobile', description: 'A tua ideia no telemóvel. Desenvolvimento de aplicações e integração com os serviços e dados de que o teu projeto precisa.', tags: ['React Native', 'Flutter', 'Integração de APIs'] },
  { number: '03', icon: 'code', title: 'Software à medida', description: 'Ferramentas para simplificar o dia a dia. Funcionalidades, integrações e soluções pensadas para os processos do teu negócio.', tags: ['Backend & APIs', 'Bases de dados', 'Ferramentas internas'] },
]
export const experience = [
  { period: 'DEZ. 2024 — ATUAL', role: 'Software Engineer', company: 'Glintt Life', description: 'Desenvolvimento e evolução de uma aplicação mobile para o setor da saúde. Funcionalidades em React Native, persistência local e integração com serviços backend.', tags: ['React Native', 'TypeScript', 'SQLite', 'REST APIs'] },
  { period: 'ABR. 2022 — DEZ. 2024', role: 'Desenvolvimento full-stack & mobile', company: 'Glintt Life', description: 'Desenvolvimento de soluções de saúde: aplicações web com ASP.NET Core MVC, backend em C# e Oracle, e uma aplicação mobile no projeto MEDON com Xamarin.', tags: ['C# / .NET', 'ASP.NET Core', 'Oracle', 'Xamarin'] },
  { period: '2023 — 2026 · PERÍODOS LETIVOS', role: 'Docente convidado', company: 'Instituto Politécnico de Bragança', description: 'Docência em Desenvolvimento de Aplicações, Informática e Estatística e Bases de Dados. Acompanhamento de exercícios e projetos em C#, SQL e modelação de dados.', tags: ['Ensino superior', 'C#', 'SQL', 'MongoDB'] },
  { period: 'JAN. 2021 — ABR. 2022', role: 'Software Engineer', company: 'PVIT', description: 'Criação de websites, ferramentas internas de logística e soluções mobile. Trabalho desde os requisitos e o design até ao desenvolvimento e manutenção.', tags: ['WordPress', 'PHP', 'Flutter', 'Firebase'] },
]
export const process = [
  { number: '01', title: 'Conversamos', text: 'Percebo a tua ideia, os objetivos e o que o projeto precisa de resolver.' },
  { number: '02', title: 'Definimos o caminho', text: 'Alinhamos o âmbito, a solução, os prazos e o orçamento antes de começar.' },
  { number: '03', title: 'Construímos', text: 'Desenvolvo a solução com pontos de contacto para acompanhares o progresso.' },
  { number: '04', title: 'Colocamos em prática', text: 'Testamos, preparamos a entrega e combinamos o acompanhamento necessário.' },
]
export const technologies = ['React', 'React Native', 'TypeScript', 'C# / .NET', 'SQL', 'REST APIs', 'Flutter', 'Git']
