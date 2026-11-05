// ==========================================
// DADOS DO PARQUE
// ==========================================
const dadosPark = {
    reserva: {
        imagem: "mapa.zoo.webp",
        categoriasLegenda: [
            { id: 'alimentacao',texto: 'ALIMENTAÇÃO'},
            { id: 'animais',    texto: 'ZOOLOGICO'  },
            { id: 'atracao',    texto: 'ATRAÇÕES'   },
            { id: 'souvenir',   texto: 'SOUVENIR'   },
            { id: 'banheiros',  texto: 'BANHEIROS'  },
            { id: 'servicos',   texto: 'SERVIÇOS'   }
        ],
        pontos: [
            // Alimentação
            { id: "alim_recepcao", nome: "CAFÉ RECEPÇÃO", tipo: "ALIMENTAÇÃO", legendaNome: "QUIÓSQUE CAFÉ RECEPÇÃO<br>Kiosk Cafe Reception", area: "Onde tudo começa e aonde damos um até breve!", desc: "☕ Cafeteria e Salgados", icone: "icons/caferecepcao.png", categoria: "alimentacao", top: 27, left: 48 },
            { id: "alim_leao", nome: "QUIOSQUE LEÃO", tipo: "ALIMENTAÇÃO", legendaNome: "QUIÓSQUE LEÃO<br>Kiosk Lion", area: "Logo após o recinto do Leão. ", desc: "🍿 Café, Salgados e pipocas", icone: "icons/pontoleao.png", categoria: "alimentacao", top: 48, left: 41 },            
            { id: "alim_sucuarana", nome: "QUIOSQUE SUÇUARANA", tipo: "ALIMENTAÇÃO", legendaNome: "QUIÓSQUE SUÇUARANA<br>Kiosk Puma", area: "🍿 Salgados e pipocas", desc: "Em frente ao recinto Suçuarana.", icone: "icons/pontosucuarana.png", categoria: "alimentacao", top: 64, left: 43 },
            { id: "alim_tamandua", nome: "QUIOSQUE TAMANDUÁ", tipo: "ALIMENTAÇÃO", legendaNome: "QUIÓSQUE TAMANDUA<br>Kiosk Anteater", area: "🍿 Café, Salgados e pipocas", desc: "Localizado em frente ao recinto tamanduá.", icone: "icons/pontotamandua.png", categoria: "alimentacao", top: 60, left: 50 },
            { id: "alim_fazendinha", nome: "QUIOSQUE FAZENDINHA", tipo: "ALIMENTAÇÃO", legendaNome: "QUIÓSQUE FAZENDINHA", area: "Doces e Pipocas", desc: "🍿 Quiosque Fazendinha (Doces e Bebidas)", icone: "icons/pontofazendinha.png", categoria: "alimentacao", top: 78, left: 64 },  
            { id: "alim_hamb_est2", nome: "HAMBURGUERIA EST.2", tipo: "ALIMENTAÇÃO", legendaNome: "HAMBURGUERIA EST.2", area: "Ambiente aconchegante para refeições e lembranças", desc: "🍔 Hamburgueres, salgados e Bebidas", icone: "icons/hambestacao.png", categoria: "alimentacao", top: 80, left: 65 },
            { id: "alim_lobo_marinho", nome: "QUIOSQUE LOBO MARINHO", tipo: "ALIMENTAÇÃO", legendaNome: "QUIÓSQUE LOBO MARINHO", area: "🍿 Café, Salgados e pipocas", desc: "Localizado na Reserva.", icone: "icons/pontolobomarinho.png", categoria: "alimentacao", top: 80, left: 80 },
            { id: "alim_pastelaria", nome: "FOOD PARK PASTELARIA", tipo: "ALIMENTAÇÃO", legendaNome: "FOOD PARK PASTEL", area: "Natureza e uma boa alimentação", desc: "🥟 Pasteis sabores", icone: "icons/foodpastel.png", categoria: "alimentacao", top: 60, left: 71 },
            { id: "alim_yakisoba", nome: "FOOD PARK YAKISOBA", tipo: "ALIMENTAÇÃO", legendaNome: "FOOD PARK YAKISOBRA", area: "Natureza e uma boa alimentação", desc: "🍜 Yakissoba Carne e Frango", icone: "icons/foodyakisoba.png", categoria: "alimentacao", top: 63, left: 71 },
            { id: "alim_chickenfries", nome: "FOOD PARK CHICKEN & FRIES", tipo: "ALIMENTAÇÃO", legendaNome: "FOOD PARK CHICKEN & FRIES", area: "Natureza e uma boa alimentação", desc: "🍗 Chicken & Fries", icone: "icons/foodchicken.png", categoria: "alimentacao", top: 60, left: 69 },
            { id: "alim_espetaria", nome: "FOOD PARK ESPETARIA/LINGUIÇARIA", tipo: "ALIMENTAÇÃO", legendaNome: "FOOD PARK ESPETO/LINGUIÇA", area: "Natureza e uma boa alimentação", desc: "🍖 Espetos e lanches de linguiça", icone: "icons/foodespeto.png", categoria: "alimentacao", top: 63, left: 69 },
            { id: "alim_rest_central", nome: "RESTAURANTE CENTRAL BABOBÁ", tipo: "ALIMENTAÇÃO", legendaNome: "RESTAURANTE BAOBÁ", area: "Buffet a Vontade", desc: "🍽️ Buffet por pessoa (Adulto e Infantil)", icone: "icons/restbaoba.png", categoria: "alimentacao", top: 45.5, left: 55.5 },
            { id: "alim_iglu", nome: "MOBILE IGLU", tipo: "ALIMENTAÇÃO", legendaNome: "MOBILE KIBON IGLU", area: "Sorvete para resfrescar!", desc: "Localizado na Reserva.", icone: "icons/mobileiglu.png", categoria: "alimentacao", top: 40, left: 70 },
            { id: "alim_canguru", nome: "QUIOSQUE CANGURU", tipo: "ALIMENTAÇÃO", legendaNome: "QUIÓSQUE CANGURU", area: "🍿 Café, Salgados e pipocas", desc: "Localizado na Reserva.", icone: "icons/pontocanguru.png", categoria: "alimentacao", top: 40, left: 74.5 },
            { id: "alim_hambvila", nome: "HAMBURGUERIA DA VILA", tipo: "ALIMENTAÇÃO", legendaNome: "HAMBURGUERIA DA VILA", area: "Ambiente aconchegante para refeições e lembranças", desc: "🍔Hamburgueres e Bebidas", icone: "icons/hambvila.png", categoria: "alimentacao", top: 21, left: 51 },
            { id: "alim_cafevila", nome: "CAFETERIA DA VILA", tipo: "ALIMENTAÇÃO", legendaNome: "CAFETERIA DA VILA", area: "Ambiente aconchegante para refeições e lembranças", desc: "☕ Cafeteria e Salgados", icone: "icons/cafevila.png", categoria: "alimentacao", top: 20.1, left: 53 },
            { id: "alim_shakedobin", nome: "SHAKE DO BIN", tipo: "ALIMENTAÇÃO", legendaNome: "SHAKE DO BIN", area: "Ambiente aconchegante para refeições e lembranças", desc: "🥤 Shakes e Sorvetes", icone: "icons/pontoshake.png", categoria: "alimentacao", top: 19.1, left: 55 },
            { id: "alim_savana", nome: "RESTAURANTE SAVANA", tipo: "ALIMENTAÇÃO", legendaNome: "RESTAURANTE SAVANA", area: "Ambiente aconchegante para refeições e lembranças", desc: "🥩 Pratos pronto de carnes nobres", icone: "icons/restsavana.png", categoria: "alimentacao", top: 18.5, left: 57 },
            { id: "alim_selva", nome: "SELVA DOS SABORES", tipo: "ALIMENTAÇÃO", legendaNome: "SELVA DOS SABORES", area: "Ambiente aconchegante para refeições e lembranças", desc: "🍕 Pizzas e Crepes", icone: "icons/selvasabores.png", categoria: "alimentacao", top: 23.5, left: 52 },
            { id: "alim_hotdog", nome: "HOTDOG DO KIRAN", tipo: "ALIMENTAÇÃO", legendaNome: "HOT DOG DO KIRAN", area: "Ambiente aconchegante para refeições e lembranças", desc: "🌭 Hot Dog's Sabores", icone: "icons/hotdog.png", categoria: "alimentacao", top: 23, left: 54 },
            { id: "alim_tratoria", nome: "VILA TRATORIA", tipo: "ALIMENTAÇÃO", legendaNome: "VILA TRATORIA", area: "Ambiente aconchegante para refeições e lembranças", desc: "🍝 Pratos de massas e Carnes", icone: "icons/tratoria.png", categoria: "alimentacao", top: 22, left: 56 },
            { id: "alim_cantgira", nome: "CANTINHO DA GIRAFA", tipo: "ALIMENTAÇÃO", legendaNome: "CANTINHO DA GIRAFA", area: "Ambiente aconchegante para refeições e lembranças", desc: "🍨 Picolé e Sorvete por massa", icone: "icons/pontocantinho.png", categoria: "alimentacao", top: 26, left: 53 },
            { id: "alim_cesta", nome: "CESTA PICNIC", tipo: "ALIMENTAÇÃO", legendaNome: "CESTA PIC NIC", area: "Diversão e refeição, tudo em um só lugar!", desc: "🍔 Hamburgueres e Bebidas", icone: "icons/cesta.png", categoria: "alimentacao", top: 15, left: 32 },
            { id: "alim_carrinho", nome: "CARRINHO DOCE e PIPOCA", tipo: "ALIMENTAÇÃO", legendaNome: "CARRINHO DE DOCE/PIPOCA", area: "Diversão e refeição, tudo em um só lugar!", desc: "🍿 Carrinho de Doce e Pipoca", icone: "icons/carrinho.png", categoria: "alimentacao", top: 18, left: 32 },
            { id: "alim_carrosel", nome: "CESTA CARROSEL", tipo: "ALIMENTAÇÃO", legendaNome: "CESTA CARROSEL", area: "Diversão e refeição, tudo em um só lugar!", desc: "☕ Porções e Cafés", icone: "icons/carrosel.png", categoria: "alimentacao", top: 17.5, left: 35 },
            { id: "alim_deck", nome: "DECK PIC NIC", tipo: "ALIMENTAÇÃO", legendaNome: "DECK PIC NIC", area: "Diversão e refeição, tudo em um só lugar!", desc: "🍿 Doces, bebidas e Pipocas", icone: "icons/deck.png", categoria: "alimentacao", top: 20.5, left: 35 },
            { id: "alim_mundodoce", nome: "MUNDO DOCE", tipo: "ALIMENTAÇÃO", legendaNome: "MUNDO DOCE", area: "Diversão e refeição, tudo em um só lugar!", desc: "🥮 Doces, salgados e Bebidas", icone: "icons/mundodoce.png", categoria: "alimentacao", top: 20, left: 38 },
            { id: "alim_lego", nome: "LEGO", tipo: "ALIMENTAÇÃO", legendaNome: "QUIÓSQUE LEGO", area: "Diversão e refeição, tudo em um só lugar!", desc: "🥮 Doces e Bebidas", icone: "icons/lego.png", categoria: "alimentacao", top: 23, left: 38 },
            { id: "alim_splash", nome: "QUIOSQUE SPLASH", tipo: "ALIMENTAÇÃO", legendaNome: "QUIÓSQUE SPLASH", area: "🍿 Café, Salgados e pipocas", desc: "Localizado próximo ao vulcão.", icone: "icons/splash.png", categoria: "alimentacao", top: 7, left: 41 },
            { id: "alim_viking", nome: "QUIOSQUE VIKING", tipo: "ALIMENTAÇÃO", legendaNome: "QUIÓSQUE VIKING", area: "🍿 Café, Salgados e pipocas", desc: "Localizado na entrada do Outdoor.", icone: "icons/viking.png", categoria: "alimentacao", top: 14, left: 39 },
            { id: "alim_aviario", nome: "CAFÉ AVIÁRIO", tipo: "ALIMENTAÇÃO", legendaNome: "CAFÉ CAVERNA/AVIÁRIO", area: "Um dos Maiores Aviários da América Latina", desc: "☕ Cafeteria e Salgados", icone: "icons/cafecaverna.png", categoria: "alimentacao", top: 60, left: 35 },

            // Banheiros
            { id: "wc_recepcao", nome: "WC RECEPÇÃO", tipo: "BANHEIROS", legendaNome: "RECEPÇÃO", area: "Localizado na Recepção", desc: "🚻 Banheiro (Comum e Acessível)", icone: "icons/banheiro.png", categoria: "banheiros", top: 27, left: 48 },
            { id: "wc_leao", nome: "WC LEÃO", tipo: "BANHEIROS", legendaNome: "LEÃO", area: "Localizado logo após o recinto do leão", desc: "🚻 Banheiro (Comum e Acessível)", icone: "icons/banheiro.png", categoria: "banheiros", top: 47.5, left: 42 },
            { id: "wc_aviario", nome: "WC AVIÁRIO", tipo: "BANHEIROS", legendaNome: "AVIÁRIO", area: "Localizado dentro do Aviário", desc: "🚻 Banheiro (Comum e Acessível)", icone: "icons/banheiro.png", categoria: "banheiros", top: 60, left: 35 },
            { id: "wc_baoba", nome: "WC RESTAURANTE BAOBÁ", tipo: "BANHEIROS", legendaNome: "RESTAURANTE BAOBÁ", area: "Localizado na parte externa do Buffet", desc: "🚻 Banheiro (Comum e Acessível)", icone: "icons/banheiro.png", categoria: "banheiros", top: 53, left: 52 },
            { id: "wc_fazendinha", nome: "WC FAZENDINHA", tipo: "BANHEIROS", legendaNome: "FAZENDINHA", area: "Localizado perto do desembarque Estação 2.", desc: "🚻 Banheiro (Comum e Acessível)", icone: "icons/banheiro.png", categoria: "banheiros", top: 80, left: 60 },
            { id: "wc_food_park", nome: "WC FOOD PARK", tipo: "BANHEIROS", legendaNome: "FOOD PARK", area: "Localizado no Food Park", desc: "🚻 Banheiro (Comum e Acessível)", icone: "icons/banheiro.png", categoria: "banheiros", top: 60.5, left: 74.5 },
            { id: "wc_vila_animalia", nome: "WC VILA ANIMÁLIA", tipo: "BANHEIROS", legendaNome: "VILA ANIMALIA", area: "Localizado na Saída do Zoológico", desc: "🚻 Banheiro (Comum e Acessível)", icone: "icons/banheiro.png", categoria: "banheiros", top: 21, left: 56 },
            { id: "wc_div_indoor", nome: "WC DIV INDOOR", tipo: "BANHEIROS", legendaNome: "ANIMALIA DIVERSÃO", area: "Localizado dentro do Animália Diversão", desc: "🚻 Banheiro (Comum e Acessível)", icone: "icons/banheiro.png", categoria: "banheiros", top: 20, left: 38 },
            { id: "wc_div_outdoor", nome: "WC DIV OUTDOOR", tipo: "BANHEIROS", legendaNome: "ANIMALIA AVENTURA", area: "Localizado ao redor do Diversão Aventura", desc: "🚻 Banheiro (Comum e Acessível)", icone: "icons/banheiro.png", categoria: "banheiros", top: 15, left: 48 },
            { id: "wc_borboletario", nome: "WC BORBOLETÁRIO", tipo: "BANHEIROS", legendaNome: "JARDIM DAS BORBOLETAS", area: "Localizado na parte externa do Buffet", desc: "🚻 Banheiro (Comum e Acessível)", icone: "icons/banheiro.png", categoria: "banheiros", top: 55, left: 55.5 },
            { id: "wc_hipopotamo", nome: "WC HIPOPOTAMO", tipo: "BANHEIROS", legendaNome: "HIPOPOTAMO", area: "Localizado em frente ao recinto do Hipopotamo", desc: "🚻 Banheiro (Comum e Acessível)", icone: "icons/banheiro.png", categoria: "banheiros", top: 43, left: 68 },

            // Souvenirs
            { id: "souv_adventure", nome: "ANIMALIA ADVENTURE", tipo: "SOUVENIR", legendaNome: "ANIMALIA ADVENTURE<br>Loja de souvenier", area: "Onde tudo começa e aonde damos um até breve!", desc: "🧸 Animalia Adventure (Souvenir)", icone: "icons/souvenir.png", categoria: "souvenir", top: 27, left: 47 },
            { id: "souv_vilas", nome: "VILAS ADVENTURE", tipo: "SOUVENIR", legendaNome: "VILA ANIMALIA<br>Loja de souvenier", area: "Ambiente aconchegante para refeições e garantir uma lembrança", desc: "🧸 Vila Adventure (Souvenir)", icone: "icons/souvenir.png", categoria: "souvenir", top: 19.1, left: 55 },
            { id: "souv_baby", nome: "BABY ZOO", tipo: "SOUVENIR", legendaNome: "BABY ZOO<br>Loja de souvenier", area: "Ambiente aconchegante para refeições e garantir uma lembrança", desc: "🧸 Baby Zoo (Souvenir)", icone: "icons/souvenir.png", categoria: "souvenir", top: 20.1, left: 53 },
            { id: "souv_est.fazenda", nome: "ESTAÇÃO SOUVENIR", tipo: "SOUVENIR", legendaNome: "ESTAÇÃO. FAZENDINHA<br>Loja de souvenier", area: "Ambiente aconchegante para refeições e lembranças", desc: "🧸 Estação Souvenir (Ursinhos e lembrancinhas)", icone: "icons/souvenir.png", categoria: "souvenir", top: 78, left: 64 },
            { id: "souv_divavd", nome: "DIVERSÂO ADVENTURE", tipo: "SOUVENIR", legendaNome: "DIVERSÃO ADVENTURE<br>Loja de souvenier", area: "Diversão e Pelucia!", desc: "🧸 Diversão Adventure (Souvenir)", icone: "icons/souvenir.png", categoria: "souvenir", top: 20, left: 37},
            { id: "foto_aviario", nome: "FOTO OFICIAL AVIÁRIO", tipo: "SOUVENIR", legendaNome: "FOTO OFICIAL<br>Ponto Tira foto", area: "Leve uma recordação para casa!", desc: "📸 Fotografia Oficial", icone: "icons/foto.png", categoria: "souvenir", top: 56, left: 38 },            
            { id: "foto_recepcao", nome: "FOTO OFICIAL RECEPÇÃO", tipo: "SOUVENIR", legendaNome: "FOTO OFICIAL<br>Ponto Compra foto", area: "Leve uma recordação para casa!", desc: "📸 Fotografia Oficial", icone: "icons/foto.png", categoria: "souvenir", top: 27, left: 49 },  

            // Serviços
            { id: "serv_sav", nome: "SAV", tipo: "SERVIÇOS", legendaNome: "SAV - ATENDIMENTO AO VISITANTE", area: "Reclamações, elogios ou retirada de duvidas", desc: "💻 SAV (Serviço de Atendimento ao Visitante)", icone: "icons/recepcao.png", categoria: "servicos", top: 27, left: 48 },
            { id: "serv_ambulatorio", nome: "AMBULATÓRIO", tipo: "SERVIÇOS", legendaNome: "AMBULATÓRIO MÉDICO", area: "Ambulatório teste Animália Park", desc: "Localizado na Vila Animália.", icone: "icons/ambulatorio.png", categoria: "servicos", top: 26, left: 53 },
            { id: "serv_estacionamento2", nome: "ESTACIONAMENTO EXTERNO", tipo: "SERVIÇOS", legendaNome: "ESTACIONAMENTO EXTERNO", area: "Estacionamento seguro e com Transfer", desc: "🚗 Vagas Comuns<br>♿ Vagas Acessíveis<br>", icone: "icons/estacionamento.png", categoria: "servicos", top: 76, left: 46 },
            { id: "serv_estacionamento1", nome: "ESTACIONAMENTO INTERNO", tipo: "SERVIÇOS", legendaNome: "ESTACIONAMENTO INTERNO", area: "Vaga garantida e seu carro assegurado!", desc: "🚗 Vagas Comuns<br>♿ Vagas Acessíveis<br>🪫 Vagas para Carros Eletrificados<br>", icone: "icons/estacionamento.png", categoria: "servicos", top: 40, left: 28 },

            // Atrações
            { id: "atracao_indoor", nome: "🎡 ANIMALIA DIVERSÃO", tipo: "ATRAÇÕES", legendaNome: "ANIMALIA DIVERSÃO<br>Galpão indoor", area: "Atrações Mágicas e divertidas!", desc: "🐸 Vitória Régia<br>🛩️ Eagle Flight (Aviãozinho)<br>🎈 Balão Mexicano<br>👒 Forte Apache (Trenzinho)<br>🦘 Kanguroo Joy<br>🦒 Giraffe Cool<br>🎠 Bella Giostra (Carrossel)<br>🩻 Joe Caveira<br>🧗 Kite Dragon<br>🍭 Mundo Doce<br>⛵ Rise of Rome<br>🥶 Bear Mountain<br>🏎 Big Chock (bate-bate)<br>🧩 Cantinho do Silêncio (Para pessoas neurodivergentes)<br>", icone: "icons/divindoor.png", categoria: "atracao", top: 21, left: 38 },
            { id: "atracao_aventura", nome: "🎢 ANIMALIA AVENTURA", tipo: "ATRAÇÕES", legendaNome: "ANIMALIA AVENTURA<br>Area Externa", area: "Atrações Radicaaaaais!", desc: "⛵ Barco Viking (Aqui tem que gritar)<br>💧 Splash (Águaaaa)<br>🥶 Cyber Hawk (De ponta cabeça)<br>🎢 Cyclone (Intensidade e aventura)<br>🐀 Big Air Coaster (Essa é leve)<br>🔫 Aqua Combat (Combate aquático)<br>", icone: "icons/divoutdoor.png", categoria: "atracao", top: 10, left: 40 },
            { id: "atracao_tel_est2", nome: "WALK IN THE FOREST", tipo: "ATRAÇÕES", legendaNome: "ESTAÇÃO TELEFÉRICO<br>Fazendinha", area: "Estação teleférico Vila Animalia", desc: "🚠 Estação Teleférico (Vai e Volta ou só vai)", icone: "icons/estacao.png", categoria: "atracao", top: 82, left: 65 },
            { id: "atracao_tel_est1", nome: "WALK IN THE FOREST", tipo: "ATRAÇÕES", legendaNome: "ESTAÇÃO TELEFÉRICO<br>Vila Animália", area: "Estação teleférico Fazendinha", desc: "🚠 Estação Teleférico (Vai e Volta ou só vai)", icone: "icons/estacao.png", categoria: "atracao", top: 20, left: 53 },

                 // SAVANA AFRICANA
            { id: "zoo_savanafricana", nome: "SAVANA AFRICANA", tipo: "ANIMÁLIA RESERVA", legendaNome: "SAVANA AFRICANA<br>African Savanna", area: "African Savanna", desc: "<b>Espécies Presentes:</b> Girafa, Zebra, Avestruz, Antílopes (Oryx, Adax, Cervicabra, Waterbuck, Cobo-do-Nilo) e Aves (Flamingo, Galinha-d'Angola, Ganso-do-Egito)<br><b>Bioma:</b>Savana Africana e Campos Abertos<br><b>Destaque:</b>Recinto imersivo multiespécie que simula a convivência natural entre grandes herbívoros e aves da fauna africana<br>", icone: "icons/1.png", categoria: "animais", top: 35, left: 52 },
 
            
                 // ZOO 1
            { id: "zoo_leao", nome: "LEÃO", tipo: "ANIMÁLIA RESERVA", legendaNome: "LEÃO<br>Lion", area: "Lion", desc: "<b>Dieta:</b> Carnivoro<br><b>Origem:</b> Africa/India | Savana e Campos Abertos<br><b>Porte:</b>Grande | 150kg a 250kg <br><b>Hábitos:</b> Crepuscular e Noturno | Social<br>", icone: "icons/2.png", categoria: "animais", top: 44, left: 38.5 },
            { id: "zoo_Fig", nome: "MIRANTE-FIGUEIRA", tipo: "ANIMÁLIA RESERVA", legendaNome: "MIRANTE-FIGUEIRA<br>Fig tree belvedere", area: "Fig tree belvedere", desc: "<b>Dieta:</b> Autótrofa (Fotossíntese)<br><b>Origem:</b> Ásia e Regiões Tropicais | Florestas e Áreas Arborizadas<br><b>Porte:</b> Grande (até 20m a 30m de altura)<br><b>Hábitos:</b> Perene (mantem folhas o ano todo) | Planta fixada e abrigo para fauna<br>", icone: "icons/3.png", categoria: "animais", top: 48, left: 43 },
            { id: "zoo_orq", nome: "ORQUIDÁRIO", tipo: "ANIMÁLIA RESERVA", legendaNome: "ORQUIDÁRIO<br>Orchidary", area: "Orchidary", desc: "<b>Dieta:</b>Autótrofa (Fotossinteses)br><b>Origem:</b>Cosmopolita (predominantemente em regiões tropicais e subtropicais de todo o mundo)<br><b>Porte:</b>Variável (desde espécies minúsculas até epífitas de médio porte)<br><b>Hábitos:</b>Epífitas (crescem sobre outras plantas), rupícolas (sobre rochas) ou terrestres; perenes<br>", icone: "icons/4.png", categoria: "animais", top: 52, left: 35 },
            { id: "zoo_onça", nome: "ONÇA-PINTADA", tipo: "ANIMÁLIA RESERVA", legendaNome: "ONÇA-PINTADA<br>Jaguar", area: "Jaguar", desc: "<b>Dieta:</b> Carnívoro <br><b>Origem:</b>Américas (América do Sul e Central) <br><b>Porte:</b>Grande | 56kg a 130 kg <br><b>Hábitos:</b>Solitário, territorial e crepuscular/noturno <br>", icone: "icons/5.png", categoria: "animais", top: 51, left: 29 },
            { id: "zoo_sai", nome: "SAUIM-DE-COLEIRA", tipo: "ANIMÁLIA RESERVA", legendaNome: "SAUIM-DE-COLEIRA<br>Pied Tamarin", area: "Pied Tamarin", desc: "<b>Dieta:</b>Onívoro (Insetos, Frutos e Plantas) <br><b>Origem:</b>Brasil (Amazônia, região de Manaus e arredores) <br><b>Porte:</b>Pequeno | 300g á 400g <br><b>Hábitos:</b>Diurno, arborícola e vive em grupos sociais <br>", icone: "icons/6.png", categoria: "animais", top: 54, left: 35 },

                 // FOREST
            { id: "zoo_aviário", nome: "Aviário Animália Park", tipo: "ANIMÁLIA FOREST", legendaNome: "ANIMÁLIA FOREST", area: "Animais que voce encontra aqui:", desc: "AVES / Birds<br>ANTA / Lowland Tapir<br>CUTIA / Azara's Agouti<br>LONTRA / Neotropical Otter<br>VEADO-CATINGUEIRO / Gray brocket<br>CAGADOS - JABUTIS / Chelidae - Tortoise<br>IGUANA<br>JIBOIAS - ARIRANHA / Boa - Giant Otter<br>", icone: "icons/7.png", categoria: "animais", top: 60, left: 35 },

                // ZOO 2                      

            { id: "zoo_macaranha", nome: "MACACO-ARANHA / BUGIO-RUIVO", tipo: "ANIMÁLIA RESERVA", legendaNome: "MACACO-ARANHA / BUGIO-RUIVO", area: "Guiana Spider Monkey / Southern Brown Howler Monkey", desc: "<b>Bioma:</b>Florestas Tropicais e Mata Atlantica <br><b>Caracteristicas:</b>Recinto de primatas arborícolas conhecidos pela cauda preênsil e vocalizações marcantes<br>", icone: "icons/8.png", categoria: "animais", top: 57, left: 39 },
            { id: "zoo_sucuarana", nome: "SUÇUARANA", tipo: "ANIMÁLIA RESERVA", legendaNome: "SUÇUARANA<br>Puma", area: "Puma", desc: "<b>Dieta:</b>Carnivoro <br><b>Origem:</b>Américas (do sul do Canadá à Patagônia)<br><b>Porte:</b>Grande | 29kg á 100kg <br><b>Hábitos:</b>Solitário, territorial e crepuscular/noturno <br>", icone: "icons/9.png", categoria: "animais", top: 65, left: 45 },
            { id: "zoo_urso", nome: "URSO-DE-ÓCULOS", tipo: "ANIMÁLIA RESERVA", legendaNome: "URSO-DE-ÓCULOS<br>Spectacled Bear", area: "Spectacled Bear", desc: "<b>Dieta:</b>Onivoro <br><b>Origem:</b>América do Sul (Andes) <br><b>Porte:</b>Grande | 60kg á 175kg <br><b>Hábitos:</b>Solitário, aeborícola e predominante diurno/crespuscular<br>", icone: "icons/10.png", categoria: "animais", top: 68, left: 50 },
            { id: "zoo_tamandua", nome: "TAMANDUÁ-MIRIM", tipo: "ANIMÁLIA RESERVA", legendaNome: "TAMANDUÁ-MIRIM<br>Southern Tamanudá", area: "Southern Tamanudá", desc: "<b>Dieta:</b>Onívoro <br><b>Origem:</b>América do Sul <br><b>Porte:</b>Médio | 3kg á 10kg <br><b>Hábitos:</b>Solitário, arborícola e crepuscular/noturno <br>", icone: "icons/11.png", categoria: "animais", top: 57, left: 45 },
            { id: "zoo_lobo", nome: "LOBO-GUARÁ", tipo: "ANIMÁLIA RESERVA", legendaNome: "LOBO-GUARÁ<br>Maned Wolf", area: "Maned Wolf", desc: "<b>Dieta:</b>Onivoro <br><b>Origem:</b>América do Sul (Cerrado) <br><b>Porte:</b>Grande | 20kg á 30kg <br><b>Hábitos:</b>Solitário, territorial e crespuscular/noturno <br>", icone: "icons/12.png", categoria: "animais", top: 60, left: 44 },
            { id: "zoo_raposa", nome: "RAPOSINHA-DO-CAMPO", tipo: "ANIMÁLIA RESERVA", legendaNome: "RAPOSINHA-DO-CAMPO<br>Hoary Fox", area: "Hoary Fox", desc: "<b>Dieta:</b>Onivoro <br><b>Origem:</b>Brasil (Cerrado) <br><b>Porte:</b>Pequeno | 3kg a 4kg <br><b>Hábitos:</b>Solitário, crespuscular e predominantimente noturno <br>", icone: "icons/13.png", categoria: "animais", top: 40, left: 45 },
            { id: "zoo_tamandban", nome: "TAMANDUÁ-BANDEIRA", tipo: "ANIMÁLIA RESERVA", legendaNome: "TAMANDUÁ-BANDEIRA<br>Giant Anteater", area: "Giant Anteater", desc: "<b>Dieta:</b>Onivoro <br><b>Origem:</b>Américas (Sul e Central) <br><b>Porte:</b>Grande | 25kg a 45kg <br><b>Hábitos:</b>Solitário, terrestre e predominantimente diurno/crepuscular <br>", icone: "icons/14.png", categoria: "animais", top: 60, left: 52.5 },
            { id: "zoo_arara", nome: "ARARAS ESPECIAIS", tipo: "ANIMÁLIA RESERVA", legendaNome: "ARARAS ESPECIAIS<br>Special Macaws", area: "Special Macaws", desc: "<b>Dieta:</b>Herbivoro <br><b>Origem:</b>Américas (Florestas Tropicais) <br><b>Porte:</b>Médio e Grande | 300g a 1,5kg <br><b>Hábitos:</b>Diurno, social (vive em pares e bandos) <br>", icone: "icons/15.png", categoria: "animais", top: 65, left: 58 },
            { id: "zoo_cahvinagre", nome: "CACHORRO-VINAGRE", tipo: "ANIMÁLIA RESERVA", legendaNome: "CACHORRO-VINAGRE<br>Bush Dog", area: "Bush Dog", desc: "<b>Dieta:</b>Carnivoro <br><b>Origem:</b>Américas (Sul e Central) <br><b>Porte:</b>Pequeno e Médio | 5kg 8kg <br><b>Hábitos:</b>Social (Vive e caça em alcateia), semi-aquatico e diurno) <br>", icone: "icons/16.png", categoria: "animais", top: 75, left: 57 },
                 
                   // FAZENDA            "<b>Dieta:</b> ***** <br><b>Origem:</b> ***** <br><b>Porte:</b> ***** <br><b>Hábitos:</b> ***** <br>"
            { id: "zoo_fazenda", nome: "FAZENDA ANIMÁLIA", tipo: "FAZENDA ANIMÁLIA", legendaNome: "FAZENDA ANIMÁLIA", area: "Animais que voce encontra aqui:", desc:"<b>Especies:</b>Minianimais (Cabras, Pôneis, ovelhas, coelhos e aves de capoeira) <br><b>Bioma:</b>Ambiente rural e fazenda pedagogica <br><b>Caracteristicas:</b> Espaço interativo para contato direto, alimentação e convivencia com animais domesticos<br>", icone: "icons/17.png", categoria: "animais", top: 83, left: 57 },
            { id: "zoo_chimp", nome: "CHIMPANZÉ", tipo: "ANIMÁLIA RESERVA", legendaNome: "CHIMPANZÉ<br>Chimpanzee", area: "Chimpanzee", desc: "<b>Dieta:</b> Onivoro <br><b>Origem:</b>África Central e Ocidental <br><b>Porte:</b>Grande | 32kg a 60kg <br><b>Hábitos:</b>Diurno, social (vive em comunidade) e semi-arborícola <br>", icone: "icons/18.png", categoria: "animais", top: 78, left: 67  },
            { id: "zoo_aoud", nome: "AOUDADS", tipo: "ANIMÁLIA RESERVA", legendaNome: "AOUDADS<br>Barbary Sheep", area: "Barbary Sheep", desc: "<b>Dieta:</b>Herbivoro <br><b>Origem:</b>Norte da Africa (Sara) <br><b>Porte:</b>Grande | 40kg a 145kg <br><b>Hábitos:</b>Gregário (vive em grupo), crepuscular e adaptado e terrenos rochosos <br>", icone: "icons/19.png", categoria: "animais", top: 78, left: 70 },
            { id: "zoo_beng", nome: "TIGRE-DE-BENGALA", tipo: "ANIMÁLIA RESERVA", legendaNome: "TIGRE-DE-BENGALA<br>Bengal Tiger", area: "Bengal Tiger", desc: "<b>Dieta:</b>Carnivoro <br><b>Origem:</b>Ásia (India, Bangladesh, Nepal e Butão) <br><b>Porte:</b>Grande | 100kg a 260kg <br><b>Hábitos:</b>Solitário, territorial, crepuscular/noturno e excelente nadador <br>", icone: "icons/20.png", categoria: "animais", top: 87.5, left: 70 },
            { id: "zoo_jaca", nome: "JACARÉ-DE-PAPO-AMARELO", tipo: "ANIMÁLIA RESERVA", legendaNome: "JACARÉ-DE-PAPO-AMARELO<br>Yellow-Snouted Caiman", area: "Yellow-Snouted Caiman", desc: "<b>Dieta:</b>Carnivoro <br><b>Origem:</b>América do Sul <br><b>Porte:</b>Grande | 1,5m á 2,5m <br><b>Hábitos:</b>Semi-aquatico, noturno e solitário <br>", icone: "icons/21.png", categoria: "animais", top: 90, left: 72 },
            { id: "zoo_hie", nome: "HIENA-LISTRADA", tipo: "ANIMÁLIA RESERVA", legendaNome: "HIENA-LISTRADA<br>Striped Hyaena", area: "Striped Hyaena", desc: "<b>Dieta:</b>Carnivoro <br><b>Origem:</b>Norte e Leste da Africa, Oriente Médio e Sul da Asia <br><b>Porte:</b>Médio | 22kg a 55kg <br><b>Hábitos:</b>Solitário ou em pares, noturno e essencialmente necrófago<br>", icone: "icons/22.png", categoria: "animais", top: 88, left: 74 },
            { id: "zoo_lemur", nome: "LÊMURE-NEGRO", tipo: "ANIMÁLIA RESERVA", legendaNome: "LÊMURE-NEGRO<br>lack Lemur", area: "Black Lemur", desc: "<b>Dieta:</b>Herbívoro <br><b>Origem:</b>Madagascar <br><b>Porte:</b>Pequeno | 2kg a 3kg <br><b>Hábitos:</b>Arbóreo, catemeral (ativo tanto de dia quanto de noite) e social (vive em grupos) <br>", icone: "icons/23.png", categoria: "animais", top: 89, left: 75 },
            { id: "zoo_Hien", nome: "HIENA-MALHADA", tipo: "ANIMÁLIA RESERVA", legendaNome: "HIENA-MALHADA<br>Spotted Hyaenar", area: "Spotted Hyaena", desc: "<b>Dieta:</b>Carnívoro <br><b>Origem:</b>África Subsaariana <br><b>Porte:</b>Grande | 45kg a 85kg <br><b>Hábitos:</b>Social (vive em clãs matriarcais), territorial e predominantemente noturno/crepuscular <br>", icone: "icons/24.png", categoria: "animais", top: 88, left: 78 },
            { id: "zoo_sur", nome: "SURICATO", tipo: "ANIMÁLIA RESERVA", legendaNome: "SURICATO<br>Meerkat", area: "Meerkat", desc: "<b>Dieta:</b>Onívoro <br><b>Origem:</b>Sul da África (Desertos do Kalahari e Namibe) <br><b>Porte:</b>Pequeno | 600kg a 1kg <br><b>Hábitos:</b>Diurno, social (vive em colônias) e escavador <br>", icone: "icons/25.png", categoria: "animais", top: 86, left: 77 },
            { id: "zoo_gorila", nome: "GORILA", tipo: "ANIMÁLIA RESERVA", legendaNome: "GORILA<br>Gorilla", area: "Gorilla", desc: "<b>Dieta:</b>Herbívoro <br><b>Origem:</b>África Central <br><b>Porte:</b>Grande | 100kg a 200kg <br><b>Hábitos:</b>Diurno, social (vive em grupos liderados por um macho dominante) e terrestre <br>", icone: "icons/26.png", categoria: "animais", top: 83, left: 73 },
            { id: "zoo_lemur", nome: "LÊMURE-PRETO-E-BRANCO", tipo: "ANIMÁLIA RESERVA", legendaNome: "LÊMURE-PRETO-E-BRANCO<br>Black and White Lemur", area: "Black and White Lemur", desc: "<b>Dieta:</b>Herbívoro <br><b>Origem:</b>Madagascar <br><b>Porte:</b>Pequeno | 3kg a 4,5kg<br><b>Hábitos:</b>Arborícola, diurno e social (vive em pequenos grupos) <br>", icone: "icons/27.png", categoria: "animais", top: 83, left: 77 },
            { id: "zoo_lobo", nome: "LOBO-MARINHO", tipo: "ANIMÁLIA RESERVA", legendaNome: "LOBO-MARINHO<br>Afro-Australian fur Seal", area: "Afro-Australian fur Seal", desc:  "<b>Dieta:</b>Carnívoro <br><b>Origem:</b>Regiões Subantárticas e Sul da América do Sul / África <br><b>Porte:</b>Grande | 50kg a 200kg<br><b>Hábitos:</b>Semi-aquático, gregário e excelente nadador <br>", icone: "icons/28.png", categoria: "animais", top: 80, left: 78 },
            { id: "zoo_rino", nome: "RINOCERONTE-INDIANO", tipo: "ANIMÁLIA RESERVA", legendaNome: "RINOCERONTE-INDIANO<br>Greater One-Horned Rhino", area: "Greater One-Horned Rhino", desc:  "<b>Dieta:</b>Herbívoro <br><b>Origem:</b>Sul da Ásia (Índia e Nepal) <br><b>Porte:</b>Grande | 1.6kg a 2.2kg <br><b>Hábitos:</b>Solitário, semi-aquático, crepuscular e territorial <br>", icone: "icons/29.png", categoria: "animais", top: 72, left: 74 },
            { id: "zoo_lemur", nome: "LÊMURE-DE-CAUDA-ANELADA", tipo: "ANIMÁLIA RESERVA", legendaNome: "LÊMURE-DE-CAUDA-ANELADA<br>Ring-Tailed Lemur", area: "Ring-Tailed Lemur", desc:  "<b>Dieta:</b>Herbívoro <br><b>Origem:</b>Madagascar <br><b>Porte:</b>Pequeno | 2kg a 3,5kg <br><b>Hábitos:</b>Diurno, social (vive em grupos matriarcais) e predominantemente terrestre <br>", icone: "icons/30.png", categoria: "animais",  top: 68, left: 77 },
            { id: "zoo_mandril", nome: "MANDRIL", tipo: "ANIMÁLIA RESERVA", legendaNome: "MANDRIL<br>Mandrill", area: "Mandrill", desc:  "<b>Dieta:</b>Onívoro <br><b>Origem:</b>África Central (Florestas Tropicais) <br><b>Porte:</b>Grande | 11kg a 33kg <br><b>Hábitos:</b>Diurno, social (vive em grandes grupos) e semi-terrestre <br>", icone: "icons/31.png", categoria: "animais", top: 65, left: 75 },
            { id: "zoo_hipo", nome: "HIPOPOTAMO", tipo: "ANIMÁLIA RESERVA", legendaNome: "HIPOPOTAMO<br>Hippopotamus", area: "Hippopotamus", desc:  "<b>Dieta:</b>Herbívoro <br><b>Origem:</b>África Subsaariana <br><b>Porte:</b>Grande | 1.3kg a 3.000kg <br><b>Hábitos:</b>Semi-aquático, gregário (vive em grupos) e noturno/crepuscular <br>", icone: "icons/32.png", categoria: "animais", top: 42, left: 63 },
            { id: "zoo_camel", nome: "EMU-CAMELO", tipo: "ANIMÁLIA RESERVA", legendaNome: "EMU-CAMELO<br>Emu-Bactrian Camel", area: "Emu-Bactrian Camel", desc:  "<b>Dieta:</b>Herbívoro <br><b>Origem:</b>Ásia Central e Norte da África <br><b>Porte:</b> Grande | 300kg a 1.000kg <br><b>Hábitos:</b>Diurno, gregário e adaptado a ambientes áridos e desérticos <br>", icone: "icons/33.png", categoria: "animais", top: 45, left: 70 },
            { id: "zoo_canguru", nome: "CANGURU-VERMELHO", tipo: "ANIMÁLIA RESERVA", legendaNome: "CANGURU-VERMELHO<br>Red Kangaroo", area: "Red Kangaroo", desc:  "<b>Dieta:</b>Herbívoro <br><b>Origem:</b>Austrália <br><b>Porte:</b>Grande | 20kg a 90kg <br><b>Hábitos:</b>Crepuscular/noturno, gregário (vive em pequenos grupos) e essencialmente terrestre  <br>", icone: "icons/34.png", categoria: "animais", top: 43, left: 75 },
            { id: "zoo_viveiro", nome: "VIVEIRO AVES ORNAMENTAIS", tipo: "ANIMÁLIA RESERVA", legendaNome: "VIVEIRO AVES ORNAMENTAIS<br>Ornamental Birds Aviary", area: "Ornamental Birds Aviary", desc:  "<b>Especies:</b>Aves ornamentais diversas (como pavões, faisões e calopsitas) <br><b>Bioma:</b>Recinto imersivo / Florestal adaptado<br><b>Caracteristicas:</b> Espaço amplo de convivência comunitária focado na observação de plumagens coloridas e comportamentos naturais<br>", icone: "icons/35.png", categoria: "animais",  top: 23, left: 59 },
        ] 
    }
};

let scale = 1, pointX = 0, pointY = 0, startX = 0, startY = 0, isDragging = false;

// ==========================================
// FUNÇÕES DE MAPA E INTERFACE
// ==========================================

function atualizarTransformacao() {
    const mapa = document.getElementById("mapa");
    if (!mapa) return;
    mapa.style.transform = `translate(${pointX}px, ${pointY}px) scale(${scale})`;
}

function renderizarPontos(categoriaFiltro = 'alimentacao') {
    const camada = document.getElementById("camadaPontos");
    if (!camada) return;
    camada.innerHTML = "";
    
    const pontosDaLegenda = [];

    dadosPark.reserva.pontos.forEach(ponto => {
        if (categoriaFiltro === 'todos' || ponto.categoria === categoriaFiltro) {
            // Cria o marcador interativo no mapa
            const el = document.createElement("div");
            el.className = "ponto";
            el.style.top = ponto.top + "%";
            el.style.left = ponto.left + "%";
            el.innerHTML = `<img src="${ponto.icone}" alt="${ponto.nome}" class="icone-marcador">`;
            el.onclick = (e) => { e.stopPropagation(); abrirLocal(ponto); };
            camada.appendChild(el);

            // Adiciona na lista que vai popular a legenda lateral
            pontosDaLegenda.push(ponto);
        }
    });

    atualizarLegendaLateral(pontosDaLegenda);
}

function atualizarLegendaLateral(pontos) {
    const containerLegenda = document.getElementById("conteudoLegendaLateral");
    if (!containerLegenda) return;
    containerLegenda.innerHTML = "";

    pontos.forEach(ponto => {
        const item = document.createElement("div");
        item.className = "item-legenda-visual";
        item.style.cursor = "pointer";
        item.style.padding = "4px 0";
        item.style.alignItems = "center";
        item.style.display = "flex";
        item.style.gap = "8px";
        
        const textoLegenda = ponto.legendaNome || ponto.nome;
        item.innerHTML = `<img src="${ponto.icone}" alt="${textoLegenda}" style="width: 40px; height: 40px; object-fit: contain;"> <span>${textoLegenda}</span>`;

        // AO CLICAR NO ITEM DA LEGENDA: Dá zoom suave no mapa e abre o card de detalhes do local
        item.onclick = () => {
            focarNoPonto(ponto.top, ponto.left);
            abrirLocal(ponto);
        };

        containerLegenda.appendChild(item);
    });
}

// NOVA FUNÇÃO: Foca e centraliza suavemente no ponto clicado na legenda
function focarNoPonto(topPercent, leftPercent) {
    const container = document.getElementById("mapaContainer");
    const imgMapa = document.getElementById("imagemMapa");
    const mapaWrapper = document.getElementById("mapa");
    
    if (!container || !imgMapa) return;

    // Define o zoom ideal para focar no ponto (ex: 2.2x)
    scale = 1.8; 
    atualizarTransformacao();

    const realWidth = imgMapa.naturalWidth * scale;
    const realHeight = imgMapa.naturalHeight * scale;
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    // Calcula a posição em pixels correspondente à porcentagem do ponto
    const pontoXPx = (leftPercent / 100) * realWidth;
    const pontoYPx = (topPercent / 100) * realHeight;

    // Centraliza o ponto no meio exato da tela
    pointX = (containerWidth / 2) - pontoXPx;
    pointY = (containerHeight / 2) - pontoYPx;

    // Aplica animação de transição suave
    mapaWrapper.style.transition = "transform 0.4s ease-in-out";
    atualizarTransformacao();

    // Remove a transição após o movimento para o arraste manual continuar livre
    setTimeout(() => {
        mapaWrapper.style.transition = "none";
    }, 400);
}

function atualizarLegendaHorizontal() {
    const lista = document.getElementById("legendaListaHorizontal");
    if (!lista) return;
    lista.innerHTML = "";

    dadosPark.reserva.categoriasLegenda.forEach((cat, index) => {
        const li = document.createElement("li");
        li.className = "filtro-item" + (index === 0 ? " active" : "");
        li.innerText = cat.texto;

        li.onclick = () => {
            document.querySelectorAll('.filtro-item').forEach(el => el.classList.remove('active'));
            li.classList.add('active');
            renderizarPontos(cat.id);
        };
        lista.appendChild(li);
    });
}

function resetZoom() {
    const container = document.getElementById("mapaContainer");
    const imgMapa = document.getElementById("imagemMapa");
    const mapaWrapper = document.getElementById("mapa");
    
    if (!container || !imgMapa || !imgMapa.naturalWidth || imgMapa.naturalWidth === 0) return;

    const realWidth = imgMapa.naturalWidth;
    const realHeight = imgMapa.naturalHeight;
    mapaWrapper.style.width = realWidth + "px";
    mapaWrapper.style.height = realHeight + "px";

    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    
    if (containerWidth === 0 || containerHeight === 0) return;

    scale = Math.min(containerWidth / realWidth, containerHeight / realHeight);
    pointX = (containerWidth - realWidth * scale) / 2;
    pointY = (containerHeight - realHeight * scale) / 2;
    atualizarTransformacao();
}

function inicializarMapa() {
    const imgMapa = document.getElementById("imagemMapa");
    imgMapa.onload = () => { 
        resetZoom(); 
        renderizarPontos(dadosPark.reserva.categoriasLegenda[0].id); 
    };
    imgMapa.src = dadosPark.reserva.imagem;
    if (imgMapa.complete && imgMapa.naturalWidth !== 0) { imgMapa.onload(); }
    atualizarLegendaHorizontal();
}

function abrirLocal(ponto) {
    const elTipo = document.getElementById("tipoLocal");
    if (elTipo) {
        elTipo.innerText = ponto.tipo || "LOCAL";
    }
    document.getElementById("nomeLocal").innerText = ponto.nome;
    document.getElementById("areaLocal").innerText = ponto.area;
    document.getElementById("descricaoLocal").innerHTML = ponto.desc;
    document.getElementById("janelaLocal").classList.add("ativa");
}

function fecharLocal() { 
    document.getElementById("janelaLocal").classList.remove("ativa"); 
}

function fecharAoClicarFora(e) { 
    if (e.target.id === "janelaLocal") fecharLocal(); 
}

function zoomIn() { 
    scale = Math.min(scale + 0.25, 3.0); 
    atualizarTransformacao(); 
}

function zoomOut() { 
    scale = Math.max(scale - 0.25, 0.2); 
    atualizarTransformacao(); 
}

// ==========================================
// EVENTOS DE GESTO E ARRASTO (MOUSE & TOUCH)
// ==========================================

let initialDistance = 0;
let initialScale = 1;
let focalPointX = 0;
let focalPointY = 0;

function getDistance(touches) {
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
}

document.addEventListener("DOMContentLoaded", () => {
    inicializarMapa();
    const container = document.getElementById("mapaContainer");
    if (!container) return;

    // --- COLOQUE AQUI TAMBÉM FUNCIONA PERFEITAMENTE ---
    const painelLegenda = document.querySelector('.painel-legenda-lateral');
    if (painelLegenda) {
        ['touchstart', 'touchmove', 'touchend', 'mousedown', 'mousemove', 'mouseup', 'wheel'].forEach(evento => {
            painelLegenda.addEventListener(evento, (e) => {
                e.stopPropagation();
            }, { passive: false });
        });
    }

    // Eventos de Mouse
    container.addEventListener("mousedown", (e) => {
        isDragging = true; 
        startX = e.clientX - pointX; 
        startY = e.clientY - pointY;
    });

    window.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        pointX = e.clientX - startX; 
        pointY = e.clientY - startY;
        atualizarTransformacao();
    });

    window.addEventListener("mouseup", () => { 
        isDragging = false; 
    });

    // Eventos de Toque (Mobile - Arraste e Zoom focado na pinça)
    container.addEventListener("touchstart", (e) => {
        if (e.targetTouches.length === 1) {
            isDragging = true;
            startX = e.targetTouches[0].clientX - pointX;
            startY = e.targetTouches[0].clientY - pointY;
        } else if (e.targetTouches.length === 2) {
            isDragging = false;
            initialDistance = getDistance(e.targetTouches);
            initialScale = scale;

            const rect = container.getBoundingClientRect();
            focalPointX = ((e.targetTouches[0].clientX + e.targetTouches[1].clientX) / 2) - rect.left;
            focalPointY = ((e.targetTouches[0].clientY + e.targetTouches[1].clientY) / 2) - rect.top;
        }
    }, { passive: false });

    container.addEventListener("touchmove", (e) => {
        if (e.targetTouches.length === 1 && isDragging) {
            pointX = e.targetTouches[0].clientX - startX;
            pointY = e.targetTouches[0].clientY - startY;
            atualizarTransformacao();
        } else if (e.targetTouches.length === 2) {
            const currentDistance = getDistance(e.targetTouches);
            if (initialDistance > 0) {
                const zoomFactor = currentDistance / initialDistance;
                let newScale = Math.min(Math.max(initialScale * zoomFactor, 0.2), 3.0);

                pointX = focalPointX - (focalPointX - pointX) * (newScale / scale);
                pointY = focalPointY - (focalPointY - pointY) * (newScale / scale);
                scale = newScale;

                atualizarTransformacao();
            }
        }
    }, { passive: false });

    container.addEventListener("touchend", (e) => {
        if (e.targetTouches.length < 2) {
            initialDistance = 0;
        }
        if (e.targetTouches.length === 0) {
            isDragging = false;
        }
    });

    let lastWidth = window.innerWidth;
    window.addEventListener("resize", () => {
        if (window.innerWidth !== lastWidth) {
            lastWidth = window.innerWidth;
            resetZoom();
        }
    });
});


// ponto antigo, padrao google
//   topLeft:     { lat: -23.620150, lng: -46.970820 }, // Canto superior esquerdo
//   bottomRight: { lat: -23.626049, lng: -46.962151 }  // Canto inferior direito




// 1. Defina as coordenadas dos cantos da sua imagem (Seus dados reais)
const bounds = {
    topLeft:     { lat: -23.619760, lng: -46.970712 }, // Canto superior esquerdo
    bottomRight: { lat: -23.626049, lng: -46.962151 }  // Canto inferior direito
};

function atualizarLocalizacaoUsuario(lat, lng, precisao) {
    const img = document.getElementById("imagemMapa");
    const marker = document.getElementById("user-marker");
    const circulo = document.getElementById("user-precisao");

    if (!img || !marker) return;

    const currentWidth = img.clientWidth;
    const currentHeight = img.clientHeight;

    const x = ((lng - bounds.topLeft.lng) / (bounds.bottomRight.lng - bounds.topLeft.lng)) * currentWidth;
    const y = ((bounds.topLeft.lat - lat) / (bounds.topLeft.lat - bounds.bottomRight.lat)) * currentHeight;

    marker.style.left = `${x}px`;
    marker.style.top = `${y}px`;
    marker.style.display = "block";

    // Círculo de precisão: o raio é a margem de erro do GPS, convertida de metros para pixels do mapa
    if (circulo && precisao) {
        const larguraDoMapaEmMetros = (bounds.bottomRight.lng - bounds.topLeft.lng) * 111320 * Math.cos(lat * Math.PI / 180);
        const pixelsPorMetro = currentWidth / larguraDoMapaEmMetros;
        const diametro = 2 * Math.min(precisao, 150) * pixelsPorMetro; // limita em 150 m para não cobrir o mapa todo

        circulo.style.width = `${diametro}px`;
        circulo.style.height = `${diametro}px`;
        circulo.style.left = `${x}px`;
        circulo.style.top = `${y}px`;
        circulo.style.display = "block";
    }
}

// ==========================================
// PROGRESSO NA ROTA (os dados da rota ficam no arquivo rota.js)
// ==========================================

const PASSO_ROTA_M = 3;             // a rota é "esticada" em pontos a cada 3 metros
const JANELA_FRENTE = 200;          // procura a posição até 600 m à frente na rota...
const JANELA_TRAS = 30;             // ...e até 90 m atrás da posição atual
const DIST_MAX_NA_ROTA_M = 30;      // mais longe que isso da rota: não atualiza o progresso
const CONFIRMACOES_SALTO = 3;       // leituras seguidas para aceitar um salto (ex.: teleférico)
const ATALHO_LARGURA_M = 15;        // faixa de aceitação em volta da linha do atalho
const ATALHO_DISTANCIA_MIN_M = 25;  // quanto precisa andar no atalho para ele valer
const ATALHO_RETOMADA_M = 20;       // voltou a menos disso do ponto de saída: retoma a rota

// Converte latitude/longitude em metros (x para leste, y para sul), a partir do canto do mapa
function paraMetros(lat, lng) {
    return {
        x: (lng - bounds.topLeft.lng) * 111320 * Math.cos(bounds.topLeft.lat * Math.PI / 180),
        y: (bounds.topLeft.lat - lat) * 110574
    };
}

// Transforma a lista de pontos da rota em pontos a cada 3 m, guardando a distância percorrida
const rotaDensa = (function () {
    const pontos = ROTA_PRINCIPAL.map(([lat, lng]) => paraMetros(lat, lng));
    const densa = [];
    let acumulado = 0;
    for (let i = 0; i < pontos.length - 1; i++) {
        const a = pontos[i], b = pontos[i + 1];
        const comprimento = Math.hypot(b.x - a.x, b.y - a.y);
        const n = Math.max(1, Math.round(comprimento / PASSO_ROTA_M));
        for (let k = 0; k < n; k++) {
            densa.push({
                x: a.x + (b.x - a.x) * k / n,
                y: a.y + (b.y - a.y) * k / n,
                dist: acumulado + comprimento * k / n
            });
        }
        acumulado += comprimento;
    }
    const ultimo = pontos[pontos.length - 1];
    densa.push({ x: ultimo.x, y: ultimo.y, dist: acumulado });
    return densa;
})();

const COMPRIMENTO_ROTA = rotaDensa[rotaDensa.length - 1].dist;
const atalhoSaida = paraMetros(ATALHO_RESTAURANTE.saida[0], ATALHO_RESTAURANTE.saida[1]);
const atalhoChegada = paraMetros(ATALHO_RESTAURANTE.chegada[0], ATALHO_RESTAURANTE.chegada[1]);

// Ponto da rota mais perto de p, procurando só entre os índices "de" e "ate".
// Quando "centro" é informado, pontos mais distantes dele na rota custam um pouco mais.
function pontoMaisProximoNaRota(p, de, ate, centro) {
    let melhor = null;
    const inicio = Math.max(0, de), fim = Math.min(rotaDensa.length - 1, ate);
    for (let i = inicio; i <= fim; i++) {
        const q = rotaDensa[i];
        const d = Math.hypot(p.x - q.x, p.y - q.y);
        const custo = centro === undefined ? d : d + 0.1 * Math.abs(i - centro);
        if (melhor === null || custo < melhor.custo) melhor = { i, d, custo };
    }
    return melhor;
}

// Distância de p até o segmento a-b, e quantos metros p está "ao longo" dele
function distanciaAoSegmento(p, a, b) {
    const dx = b.x - a.x, dy = b.y - a.y;
    const t = Math.max(0, Math.min(1, ((p.x - a.x) * dx + (p.y - a.y) * dy) / (dx * dx + dy * dy)));
    return {
        d: Math.hypot(p.x - (a.x + t * dx), p.y - (a.y + t * dy)),
        aoLongo: t * Math.hypot(dx, dy)
    };
}

// Estado do progresso
let idxRota = null;                 // onde o visitante está na rota (índice de rotaDensa)
let progressoMaximo = 0;            // ponto mais longe já alcançado, em %
let noAtalho = false;               // está indo ao restaurante pelo atalho?
let saltoCandidato = null;          // para aceitar saltos (teleférico) só depois de confirmar
let saltoConfirmacoes = 0;
let foraDoAtalhoSeguidas = 0;
const idxSaidaAtalho = pontoMaisProximoNaRota(atalhoSaida, 0, rotaDensa.length - 1).i;

// Recebe a posição suavizada e devolve o progresso (0 a 100)
function atualizarProgresso(lat, lng) {
    const p = paraMetros(lat, lng);
    const noSegmento = distanciaAoSegmento(p, atalhoSaida, atalhoChegada);
    const dSaida = Math.hypot(p.x - atalhoSaida.x, p.y - atalhoSaida.y);

    // 1) No atalho: o progresso fica parado até voltar ao ponto de saída
    if (noAtalho) {
        if (dSaida <= ATALHO_RETOMADA_M) {
            noAtalho = false;
            idxRota = idxSaidaAtalho;       // retoma exatamente de onde saiu
            foraDoAtalhoSeguidas = 0;
        } else if (noSegmento.d > ATALHO_LARGURA_M * 2.5) {
            // saiu da faixa do atalho (seguiu por outro caminho)
            foraDoAtalhoSeguidas++;
            if (foraDoAtalhoSeguidas < CONFIRMACOES_SALTO) return progressoMaximo;
            noAtalho = false;
            foraDoAtalhoSeguidas = 0;
        } else {
            foraDoAtalhoSeguidas = 0;
            return progressoMaximo;
        }
    }

    // 2) Primeira posição: procura em toda a rota (o visitante pode abrir o mapa no meio do trajeto)
    if (idxRota === null) {
        const global = pontoMaisProximoNaRota(p, 0, rotaDensa.length - 1);
        if (global.d > DIST_MAX_NA_ROTA_M) return progressoMaximo;
        idxRota = global.i;
    } else {
        const local = pontoMaisProximoNaRota(p, idxRota - JANELA_TRAS, idxRota + JANELA_FRENTE, idxRota);

        // 3) Entrou no atalho? (perto do ponto de saída, na linha do atalho, já longe da rota)
        if (Math.abs(idxRota - idxSaidaAtalho) <= 20 &&
            noSegmento.d <= ATALHO_LARGURA_M &&
            noSegmento.aoLongo >= ATALHO_DISTANCIA_MIN_M &&
            local.d > 15) {
            noAtalho = true;
            return progressoMaximo;
        }

        // 4) Caminhada normal: acompanha a rota perto da posição atual
        if (local.d <= DIST_MAX_NA_ROTA_M) {
            idxRota = local.i;
            saltoConfirmacoes = 0;
            saltoCandidato = null;
        } else {
            // 5) Longe da posição atual: só aceita o salto (ex.: teleférico) depois de algumas leituras iguais
            const global = pontoMaisProximoNaRota(p, 0, rotaDensa.length - 1);
            if (global.d <= DIST_MAX_NA_ROTA_M) {
                if (saltoCandidato !== null && Math.abs(global.i - saltoCandidato) <= 20) {
                    saltoConfirmacoes++;
                } else {
                    saltoCandidato = global.i;
                    saltoConfirmacoes = 1;
                }
                if (saltoConfirmacoes >= CONFIRMACOES_SALTO) {
                    idxRota = global.i;
                    saltoConfirmacoes = 0;
                    saltoCandidato = null;
                }
            } else {
                saltoConfirmacoes = 0;
                saltoCandidato = null;
            }
        }
    }

    // O progresso mostra o ponto mais longe já alcançado e nunca diminui
    progressoMaximo = Math.max(progressoMaximo, rotaDensa[idxRota].dist / COMPRIMENTO_ROTA * 100);
    return Math.min(progressoMaximo, 100);
}

// ==========================================
// GPS: estados, precisão, suavização e "fora do parque"
// ==========================================

// Leituras com margem de erro maior que isso (em metros) não definem o progresso
const PRECISAO_MAXIMA_METROS = 50;

// Tolerância além das bordas do mapa (em graus; 0.0005 equivale a uns 50 metros)
const MARGEM_FORA_PARQUE = 0.0005;

// Suavização: o pin usa a média das últimas leituras boas
const JANELA_SUAVIZACAO_MS = 10000; // só vale o que chegou nos últimos 10 segundos
const MAX_LEITURAS_SUAVIZACAO = 5;  // e no máximo as 5 últimas

let leiturasBoas = [];
let ultimoProgresso = null;

function mostrarStatusGPS(texto) {
    const el = document.getElementById("progressoTexto");
    if (el) el.innerText = texto;
}

function esconderMarcadorUsuario() {
    const marker = document.getElementById("user-marker");
    if (marker) marker.style.display = "none";
    const circulo = document.getElementById("user-precisao");
    if (circulo) circulo.style.display = "none";
}

function estaDentroDoParque(lat, lng) {
    return lat <= bounds.topLeft.lat + MARGEM_FORA_PARQUE &&
           lat >= bounds.bottomRight.lat - MARGEM_FORA_PARQUE &&
           lng >= bounds.topLeft.lng - MARGEM_FORA_PARQUE &&
           lng <= bounds.bottomRight.lng + MARGEM_FORA_PARQUE;
}

// Descarta as leituras que ficaram velhas demais
function limparLeiturasAntigas() {
    const agora = Date.now();
    leiturasBoas = leiturasBoas.filter(l => agora - l.t <= JANELA_SUAVIZACAO_MS);
}

function registrarLeituraBoa(lat, lng, precisao) {
    leiturasBoas.push({ lat, lng, precisao: Math.max(precisao, 1), t: Date.now() });
    limparLeiturasAntigas();
    leiturasBoas = leiturasBoas.slice(-MAX_LEITURAS_SUAVIZACAO);
}

// Média das leituras boas: quanto menor a margem de erro, mais peso a leitura tem
function posicaoSuavizada() {
    let somaPesos = 0, somaLat = 0, somaLng = 0;
    leiturasBoas.forEach(l => {
        const peso = 1 / (l.precisao * l.precisao);
        somaPesos += peso;
        somaLat += l.lat * peso;
        somaLng += l.lng * peso;
    });
    return { lat: somaLat / somaPesos, lng: somaLng / somaPesos };
}

// Chamada toda vez que o GPS entrega uma nova posição
function aoReceberPosicao(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const precisao = position.coords.accuracy; // margem de erro, em metros

    console.log(`GPS -> Lat: ${lat}, Lng: ${lng} | precisão: ±${Math.round(precisao)} m`);

    limparLeiturasAntigas();

    // Leitura imprecisa
    if (precisao > PRECISAO_MAXIMA_METROS) {
        if (leiturasBoas.length > 0) {
            // Já temos uma posição boa recente: mantém o pin onde está e só avisa
            const progresso = ultimoProgresso !== null ? `${ultimoProgresso}% concluído · ` : "";
            mostrarStatusGPS(`${progresso}sinal fraco (±${Math.round(precisao)} m)`);
            return;
        }
        if (!estaDentroDoParque(lat, lng)) {
            esconderMarcadorUsuario();
            mostrarStatusGPS("Fora do parque");
            return;
        }
        // Ainda sem nenhuma leitura boa: mostra o pin com um círculo grande
        atualizarLocalizacaoUsuario(lat, lng, precisao);
        mostrarStatusGPS(`Ajustando precisão (±${Math.round(precisao)} m)...`);
        return;
    }

    // Leitura boa, mas fora da área do mapa
    if (!estaDentroDoParque(lat, lng)) {
        leiturasBoas = [];
        ultimoProgresso = null;
        esconderMarcadorUsuario();
        mostrarStatusGPS("Fora do parque");
        return;
    }

    // Leitura boa e dentro do parque: suaviza, desenha e calcula o progresso.
    // Se a nova posição está a mais de 100 m da anterior, foi um "salto" de verdade
    // (teleférico, GPS que ficou sem sinal): descarta as leituras antigas para não fazer média com elas.
    if (leiturasBoas.length > 0) {
        const anterior = paraMetros(posicaoSuavizada().lat, posicaoSuavizada().lng);
        const nova = paraMetros(lat, lng);
        if (Math.hypot(nova.x - anterior.x, nova.y - anterior.y) > 100) leiturasBoas = [];
    }
    registrarLeituraBoa(lat, lng, precisao);
    const pos = posicaoSuavizada();
    atualizarLocalizacaoUsuario(pos.lat, pos.lng, precisao);

    ultimoProgresso = Math.round(atualizarProgresso(pos.lat, pos.lng));
    mostrarStatusGPS(`${ultimoProgresso}% concluído`);
}

// Chamada quando o GPS não consegue entregar a posição
function aoFalharGPS(error) {
    console.warn("Aviso de Geolocalização: ", error.message);

    if (error.code === 1) {
        mostrarStatusGPS("Localização negada");
    } else if (error.code === 2) {
        mostrarStatusGPS("Sem sinal de GPS");
    } else {
        mostrarStatusGPS("Procurando sinal de GPS...");
    }
}

// Ativa o GPS do navegador em tempo real
if ("geolocation" in navigator) {
    mostrarStatusGPS("Procurando sinal de GPS...");
    navigator.geolocation.watchPosition(aoReceberPosicao, aoFalharGPS, {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 10000
    });
} else {
    mostrarStatusGPS("GPS indisponível");
}
