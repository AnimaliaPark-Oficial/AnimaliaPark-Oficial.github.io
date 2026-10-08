// ==========================================
// DADOS DO PARQUE
// ==========================================
const dadosPark = {
    reserva: {
        imagem: "mapa.zoo.webp",
        categoriasLegenda: [
            { id: 'alimentacao', texto: 'ALIMENTAÇÃO' },
            { id: 'animais', texto: 'RESERVA' },
            { id: 'atracao', texto: 'ATRAÇÕES' },
            { id: 'souvenir', texto: 'SOUVENIR' },
            { id: 'banheiros', texto: 'BANHEIROS' },
            { id: 'servicos', texto: 'SERVIÇOS' }
        ],

        pontos: [
            // Alimentação
            { id: "alim_recepcao", nome: "CAFÉ RECEPÇÃO", tipo: "ALIMENTAÇÃO", legendaNome: "QUIÓSQUE CAFÉ RECEPÇÃO", area: "Onde tudo começa e aonde damos um até breve!", desc: "☕ Cafeteria (Cafés e salgados.)", icone: "icons/caferecepcao.png", categoria: "alimentacao", top: 27, left: 48 },
            { id: "alim_leao", nome: "QUIOSQUE LEÃO", tipo: "ALIMENTAÇÃO", legendaNome: "QUIÓSQUE LEÃO", area: "🍿 Café, Salgados e pipocas", desc: "Logo após o recinto do Leão.", icone: "icons/pontoleao.png", categoria: "alimentacao", top: 48, left: 41 },
            { id: "alim_sucuarana", nome: "QUIOSQUE SUÇUARANA", tipo: "ALIMENTAÇÃO", legendaNome: "QUIÓSQUE SUÇUARANA", area: "🍿 Salgados e pipocas", desc: "Em frente ao recinto Suçuarana.", icone: "icons/pontosucuarana.png", categoria: "alimentacao", top: 64, left: 43 },
            { id: "alim_tamandua", nome: "QUIOSQUE TAMANDUÁ", tipo: "ALIMENTAÇÃO", legendaNome: "QUIÓSQUE TAMANDUA", area: "🍿 Café, Salgados e pipocas", desc: "Localizado em frente ao recinto tamanduá.", icone: "icons/pontotamandua.png", categoria: "alimentacao", top: 60, left: 50 },
            { id: "alim_fazendinha", nome: "QUIOSQUE FAZENDINHA", tipo: "ALIMENTAÇÃO", legendaNome: "QUIÓSQUE FAZENDINHA", area: "Doces e Pipocas", desc: "🍿 Quiosque Fazendinha (Doces e Bebidas)", icone: "icons/pontofazendinha.png", categoria: "alimentacao", top: 78, left: 64 },  
            { id: "alim_hamb_est2", nome: "HAMBURGUERIA EST.2", tipo: "ALIMENTAÇÃO", legendaNome: "HAMBURGUERIA EST.2", area: "Ambiente aconchegante para refeições e lembranças", desc: "🍔 Hamburgueria Teleférico (Burgers e bebidas)<br>", icone: "icons/hambestacao.png", categoria: "alimentacao", top: 80, left: 65 },
            { id: "alim_lobo_marinho", nome: "QUIOSQUE LOBO MARINHO", tipo: "ALIMENTAÇÃO", legendaNome: "QUIÓSQUE LOBO MARINHO", area: "🍿 Café, Salgados e pipocas", desc: "Localizado na Reserva.", icone: "icons/pontolobomarinho.png", categoria: "alimentacao", top: 80, left: 80 },
            { id: "alim_pastelaria", nome: "FOOD PARK PASTELARIA", tipo: "ALIMENTAÇÃO", legendaNome: "FOOD PARK PASTEL", area: "Natureza e uma boa alimentação", desc: "🥟 Pastelaria", icone: "icons/foodpastel.png", categoria: "alimentacao", top: 60, left: 71 },
            { id: "alim_yakisoba", nome: "FOOD PARK YAKISOBA", tipo: "ALIMENTAÇÃO", legendaNome: "FOOD PARK YAKISOBRA", area: "Natureza e uma boa alimentação", desc: "🍜 Yakissoba", icone: "icons/foodyakisoba.png", categoria: "alimentacao", top: 63, left: 71 },
            { id: "alim_chickenfries", nome: "FOOD PARK CHICKEN & FRIES", tipo: "ALIMENTAÇÃO", legendaNome: "FOOD PARK CHICKEN & FRIES", area: "Natureza e uma boa alimentação", desc: "🍗 Chicken & Fries", icone: "icons/foodchicken.png", categoria: "alimentacao", top: 60, left: 69 },
            { id: "alim_espetaria", nome: "FOOD PARK ESPETARIA/LINGUIÇARIA", tipo: "ALIMENTAÇÃO", legendaNome: "FOOD PARK ESPETO/LINGUIÇA", area: "Natureza e uma boa alimentação", desc: "🍖 Espetaria/Linguiçaria", icone: "icons/foodespeto.png", categoria: "alimentacao", top: 63, left: 69 },
            { id: "alim_rest_central", nome: "RESTAURANTE CENTRAL", tipo: "ALIMENTAÇÃO", legendaNome: "RESTAURANTE BAOBÁ", area: "Buffet a Vontade", desc: "🍽️ Restaurante Baboá (Buffet por Pessoa)", icone: "icons/restbaoba.png", categoria: "alimentacao", top: 45.5, left: 55.5 },
            { id: "alim_iglu", nome: "MOBILE IGLU", tipo: "ALIMENTAÇÃO", legendaNome: "MOBILE KIBON IGLU", area: "Sorvete para resfrescar!", desc: "Localizado na Reserva.", icone: "icons/mobileiglu.png", categoria: "alimentacao", top: 40, left: 70 },
            { id: "alim_canguru", nome: "QUIOSQUE CANGURU", tipo: "ALIMENTAÇÃO", legendaNome: "QUIÓSQUE CANGURU", area: "🍿 Café, Salgados e pipocas", desc: "Localizado na Reserva.", icone: "icons/pontocanguru.png", categoria: "alimentacao", top: 40, left: 74.5 },
            { id: "alim_hambvila", nome: "HAMBURGUERIA DA VILA", tipo: "ALIMENTAÇÃO", legendaNome: "HAMBURGUERIA DA VILA", area: "Ambiente aconchegante para refeições e lembranças", desc: "🍔Hamburgueria da Vila (Burgues e bebidas)", icone: "icons/hambvila.png", categoria: "alimentacao", top: 21, left: 51 },
            { id: "alim_cafevila", nome: "CAFETERIA DA VILA", tipo: "ALIMENTAÇÃO", legendaNome: "CAFETERIA DA VILA", area: "Ambiente aconchegante para refeições e lembranças", desc: "☕Vila Cafeteria (Cafés e salgados)", icone: "icons/cafevila.png", categoria: "alimentacao", top: 20.1, left: 53 },
            { id: "alim_shakedobin", nome: "SHAKE DO BIN", tipo: "ALIMENTAÇÃO", legendaNome: "SHAKE DO BIN", area: "Ambiente aconchegante para refeições e lembranças", desc: "🥤 Shake do Bin (Sorvetes e Shakes)", icone: "icons/pontoshake.png", categoria: "alimentacao", top: 19.1, left: 55 },
            { id: "alim_savana", nome: "RESTAURANTE SAVANA", tipo: "ALIMENTAÇÃO", legendaNome: "RESTAURANTE SAVANA", area: "Ambiente aconchegante para refeições e lembranças", desc: "🥩 Restaurante Savana (Carnes nobres)", icone: "icons/restsavana.png", categoria: "alimentacao", top: 18.5, left: 57 },
            { id: "alim_selva", nome: "SELVA DOS SABORES", tipo: "ALIMENTAÇÃO", legendaNome: "SELVA DOS SABORES", area: "Ambiente aconchegante para refeições e lembranças", desc: "🍕 Selva de Sabores (Pizzas e Crepes)<br>", icone: "icons/selvasabores.png", categoria: "alimentacao", top: 23.5, left: 52 },
            { id: "alim_hotdog", nome: "HOTDOG DO KIRAN", tipo: "ALIMENTAÇÃO", legendaNome: "HOT DOG DO KIRAN", area: "Ambiente aconchegante para refeições e lembranças", desc: "🌭Hot Dog do Kiran (Hot Dog's)", icone: "icons/hotdog.png", categoria: "alimentacao", top: 23, left: 54 },
            { id: "alim_tratoria", nome: "VILA TRATORIA", tipo: "ALIMENTAÇÃO", legendaNome: "VILA TRATORIA", area: "Ambiente aconchegante para refeições e lembranças", desc: "🍝Vila Tratoria (Massas e Carnes)", icone: "icons/tratoria.png", categoria: "alimentacao", top: 22, left: 56 },
            { id: "alim_cantgira", nome: "CANTINHO DA GIRAFA", tipo: "ALIMENTAÇÃO", legendaNome: "CANTINHO DA GIRAFA", area: "Ambiente aconchegante para refeições e lembranças", desc: "🍨 Cantinho da Girafa (Picoles e massas)", icone: "icons/pontocantinho.png", categoria: "alimentacao", top: 26, left: 53 },
            
            { id: "alim_cesta", nome: "CESTA PICNIC", tipo: "ALIMENTAÇÃO", legendaNome: "CESTA PIC NIC", area: "Diversão e refeição, tudo em um só lugar!", desc: "🍔 Cesta Pic Nic (Burgers e bebidas)", icone: "icons/cesta.png", categoria: "alimentacao", top: 15, left: 32 },
            { id: "alim_carrinho", nome: "CARRINHO DOCE e PIPOCA", tipo: "ALIMENTAÇÃO", legendaNome: "CARRINHO DE DOCE/PIPOCA", area: "Diversão e refeição, tudo em um só lugar!", desc: "🍿 Carrinho de Doce e Pipoca", icone: "icons/carrinho.png", categoria: "alimentacao", top: 18, left: 32 },

            { id: "alim_carrosel", nome: "CESTA CARROSEL", tipo: "ALIMENTAÇÃO", legendaNome: "CESTA CARROSEL", area: "Diversão e refeição, tudo em um só lugar!", desc: "☕ Carrossel (Porções e Cafés)", icone: "icons/carrosel.png", categoria: "alimentacao", top: 17.5, left: 35 },
            { id: "alim_deck", nome: "DECK PIC NIC", tipo: "ALIMENTAÇÃO", legendaNome: "DECK PIC NIC", area: "Diversão e refeição, tudo em um só lugar!", desc: "🍿 Deck Pic nic (Doce e Pipoca)", icone: "icons/deck.png", categoria: "alimentacao", top: 20.5, left: 35 },

            { id: "alim_mundodoce", nome: "MUNDO DOCE", tipo: "ALIMENTAÇÃO", legendaNome: "MUNDO DOCE", area: "Diversão e refeição, tudo em um só lugar!", desc: "🥮 Mundo Doce (Doces e Bebidas)", icone: "icons/mundodoce.png", categoria: "alimentacao", top: 20, left: 38 },
            { id: "alim_lego", nome: "LEGO", tipo: "ALIMENTAÇÃO", legendaNome: "QUIÓSQUE LEGO", area: "Diversão e refeição, tudo em um só lugar!", desc: "🥮 Lego (Doces e Bebidas)", icone: "icons/lego.png", categoria: "alimentacao", top: 23, left: 38 },

            
            { id: "alim_splash", nome: "QUIOSQUE SPLASH", tipo: "ALIMENTAÇÃO", legendaNome: "QUIÓSQUE SPLASH", area: "🍿 Café, Salgados e pipocas", desc: "Localizado próximo ao vulcão.", icone: "icons/splash.png", categoria: "alimentacao", top: 7, left: 41 },
            { id: "alim_viking", nome: "QUIOSQUE VIKING", tipo: "ALIMENTAÇÃO", legendaNome: "QUIÓSQUE VIKING", area: "🍿 Café, Salgados e pipocas", desc: "Localizado na entrada do Outdoor.", icone: "icons/viking.png", categoria: "alimentacao", top: 14, left: 39 },
            { id: "alim_aviario", nome: "CAFÉ AVIÁRIO", tipo: "ALIMENTAÇÃO", legendaNome: "CAFÉ CAVERNA/AVIÁRIO", area: "Um dos Maiores Aviários da América Latina", desc: "☕ Café Caverna (Cafés e salgados)", icone: "icons/cafecaverna.png", categoria: "alimentacao", top: 60, left: 35 },

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
            { id: "souv_adventure", nome: "ANIMALIA ADVENTURE", tipo: "SOUVENIR", legendaNome: "LOJA ANIMALIA ADVENTURE", area: "Onde tudo começa e aonde damos um até breve!", desc: "🧸 Animalia Adventure (Souvenir)", icone: "icons/souvenir.png", categoria: "souvenir", top: 27, left: 47 },
            { id: "souv_vilas", nome: "VILAS ADVENTURE", tipo: "SOUVENIR", legendaNome: "LOJA VILA ANIMALIA", area: "Ambiente aconchegante para refeições e garantir uma lembrança", desc: "🧸 Vila Adventure (Souvenir)", icone: "icons/souvenir.png", categoria: "souvenir", top: 19.1, left: 55 },
            { id: "souv_baby", nome: "BABY ZOO", tipo: "SOUVENIR", legendaNome: "LOJA BABY ZOO", area: "Ambiente aconchegante para refeições e garantir uma lembrança", desc: "🧸 Baby Zoo (Souvenir)", icone: "icons/souvenir.png", categoria: "souvenir", top: 20.1, left: 53 },
            { id: "souv_est.fazenda", nome: "ESTAÇÃO SOUVENIR", tipo: "SOUVENIR", legendaNome: "LOJA ESTAÇÃO. FAZENDINHA", area: "Ambiente aconchegante para refeições e lembranças", desc: "🧸 Estação Souvenir (Ursinhos e lembrancinhas)", icone: "icons/souvenir.png", categoria: "souvenir", top: 78, left: 64 },
            { id: "foto_aviario", nome: "FOTO OFICIAL AVIÁRIO", tipo: "SOUVENIR", legendaNome: "PONTO TIRA FOTO OFICIAL", area: "Leve uma recordação para casa!", desc: "📸 Fotografia Oficial", icone: "icons/foto.png", categoria: "souvenir", top: 56, left: 38 },            
            { id: "foto_recepcao", nome: "FOTO OFICIAL RECEPÇÃO", tipo: "SOUVENIR", legendaNome: "PONTO COMPRA FOTO OFICIAL", area: "Leve uma recordação para casa!", desc: "📸 Fotografia Oficial", icone: "icons/foto.png", categoria: "souvenir", top: 27, left: 49 },  
            { id: "souv_divavd", nome: "DIVERSÂO ADVENTURE", tipo: "SOUVENIR", legendaNome: "LOJA DIVERSÃO ADVENTURE", area: "Diversão e Pelucia!", desc: "🧸 Diversão Adventure (Souvenir)", icone: "icons/souvenir.png", categoria: "souvenir", top: 20, left: 37},

            // Serviços
            { id: "serv_ambulatorio", nome: "AMBULATÓRIO", tipo: "SERVIÇOS", legendaNome: "AMBULATÓRIO MÉDICO", area: "Ambulatório teste Animália Park", desc: "Localizado na Vila Animália.", icone: "icons/ambulatorio.png", categoria: "servicos", top: 26, left: 53 },
            { id: "serv_estacionamento2", nome: "ESTACIONAMENTO EXTERNO", tipo: "SERVIÇOS", legendaNome: "ESTACIONAMENTO EXTERNO", area: "Estacionamento seguro e com Transfer", desc: "🚗 Vagas Comuns<br>♿ Vagas Acessíveis<br>", icone: "icons/estacionamento.png", categoria: "servicos", top: 76, left: 46 },
            { id: "serv_estacionamento1", nome: "ESTACIONAMENTO INTERNO", tipo: "SERVIÇOS", legendaNome: "ESTACIONAMENTO INTERNO", area: "Vaga garantida e seu carro assegurado!", desc: "🚗 Vagas Comuns<br>♿ Vagas Acessíveis<br>🪫 Vagas para Carros Eletrificados<br>", icone: "icons/estacionamento.png", categoria: "servicos", top: 40, left: 28 },
            { id: "serv_sav", nome: "SAV", tipo: "SERVIÇOS", legendaNome: "SAV - ATENDIMENTO AO VISITANTE", area: "Reclamações, elogios ou retirada de duvidas", desc: "💻 SAV (Serviço de Atendimento ao Visitante)", icone: "icons/recepcao.png", categoria: "servicos", top: 27, left: 48 },

            // Atrações
            { id: "atracao_indoor", nome: "🎡 ANIMALIA DIVERSÃO", tipo: "ATRAÇÕES", legendaNome: "ANIMALIA DIVERSÃO", area: "Atrações Mágicas e divertidas!", desc: "🐸 Vitória Régia<br>🛩️ Eagle Flight (Aviãozinho)<br>🎈 Balão Mexicano<br>👒 Forte Apache (Trenzinho)<br>🦘 Kanguroo Joy<br>🦒 Giraffe Cool<br>🎠 Bella Giostra (Carrossel)<br>🩻 Joe Caveira<br>🧗 Kite Dragon<br>🍭 Mundo Doce<br>⛵ Rise of Rome<br>🥶 Bear Mountain<br>🏎 Big Chock (bate-bate)<br>🧩 Cantinho do Silêncio (Para pessoas neurodivergentes)<br>", icone: "icons/divindoor.png", categoria: "atracao", top: 21, left: 38 },
            { id: "atracao_aventura", nome: "🎢 ANIMALIA AVENTURA", tipo: "ATRAÇÕES", legendaNome: "ANIMALIA AVENTURA", area: "Atrações Radicaaaaais!", desc: "⛵ Barco Viking (Aqui tem que gritar)<br>💧 Splash (Águaaaa)<br>🥶 Cyber Hawk (De ponta cabeça)<br>🎢 Cyclone (Intensidade e aventura)<br>🐀 Big Air Coaster (Essa é leve)<br>🔫 Aqua Combat (Combate aquático)<br>", icone: "icons/divoutdoor.png", categoria: "atracao", top: 10, left: 40 },
            { id: "atracao_tel_est2", nome: "EST.2 FAZENDINHA", tipo: "ATRAÇÕES", legendaNome: "ESTAÇÃO TELEFÉRICO", area: "Embarca e se divirta com a paisagem", desc: "🚠 Estação Teleférico (Vai e Volta ou só vai)", icone: "icons/estacao.png", categoria: "atracao", top: 82, left: 65 },
            { id: "atracao_tel_est1", nome: "EST.1 VILA ANIMALIA", tipo: "ATRAÇÕES", legendaNome: "ESTAÇÃO TELEFÉRICO", area: "Embarca e se divirta com a paisagem", desc: "🚠 Estação Teleférico (Vai e Volta ou só vai)", icone: "icons/estacao.png", categoria: "atracao", top: 20, left: 53 },

            // Zoológico / Animais
            { id: "zoo_zebra", nome: "ZEBRA", tipo: "RESERVA", legendaNome: "ZEBRA", area: "Animalia Reserva", desc: "Recinto", icone: "icons/zebra.png", categoria: "animais", top: 35, left: 52  },
            { id: "zoo_girafa", nome: "GIRAFA", tipo: "RESERVA", legendaNome: "GIRAFA", area: "Animalia Reserva", desc: "Recinto", icone: "icons/girafa.png", categoria: "animais", top: 35, left: 55  },
            { id: "zoo_ema", nome: "EMA", tipo: "RESERVA", legendaNome: "EMA", area: "Animalia Reserva", desc: "Recinto", icone: "icons/ema.png", categoria: "animais", top: 38, left: 50  },
            { id: "zoo_leao", nome: "LEÃO", tipo: "RESERVA", legendaNome: "LEÃO", area: "Animalia Reserva", desc: "Recinto", icone: "icons/leao.png", categoria: "animais", top: 44, left: 38.5 },
            { id: "zoo_onça", nome: "ONÇA-PINTADA", tipo: "RESERVA", legendaNome: "ONÇA-PINTADA", area: "Animalia Reserva", desc: "Recinto", icone: "icons/onca.png", categoria: "animais", top: 51, left: 29 },
            { id: "zoo_aviário", nome: "AVIÁRIO", tipo: "RESERVA", legendaNome: "AVIÁRIO", area: "Animalia Reserva", desc: "Recinto", icone: "icons/aviario.png", categoria: "animais", top: 60, left: 35 },
            { id: "zoo_macaranha", nome: "MACACO-ARANHA", tipo: "RESERVA", legendaNome: "MACACO-ARANHA", area: "Animalia Reserva", desc: "Recinto", icone: "icons/macacoaranha.png", categoria: "animais", top: 57, left: 39 },
            { id: "zoo_sucuarana", nome: "SUÇUARANA", tipo: "RESERVA", legendaNome: "SUÇUARANA", area: "Animalia Reserva", desc: "Recinto", icone: "icons/sucuarana.png", categoria: "animais", top: 64, left: 43 },
            { id: "zoo_urso", nome: "URSO-DE-ÓCULOS", tipo: "RESERVA", legendaNome: "URSO-DE-ÓCULOS", area: "Animalia Reserva", desc: "Recinto", icone: "icons/urso.png", categoria: "animais", top: 67, left: 43 },
            { id: "zoo_tamandua", nome: "TAMANDUA", tipo: "RESERVA", legendaNome: "TAMANDUA", area: "Animalia Reserva", desc: "Recinto", icone: "icons/tamandua.png", categoria: "animais", top: 60, left: 50 },
            { id: "zoo_cahvinagre", nome: "CACHORRO-VINAGRE", tipo: "RESERVA", legendaNome: "CACHORRO-VINAGRE", area: "Animalia Reserva", desc: "Recinto", icone: "icons/cachorrovinagre.png", categoria: "animais", top: 75, left: 57  },
            { id: "zoo_fazenda", nome: "FAZENDINHA", tipo: "RESERVA", legendaNome: "FAZENDINHA", area: "Animalia Reserva", desc: "Recinto", icone: "icons/fazenda.png", categoria: "animais", top: 83, left: 57 },
            { id: "zoo_cabramontes", nome: "CABRA-DA-MONTANHA", tipo: "RESERVA", legendaNome: "CABRA-DA-MONTANHA", area: "Animalia Reserva", desc: "Recinto", icone: "icons/cabramontes.png", categoria: "animais", top: 80, left: 70 },
            { id: "zoo_gorila", nome: "GORILA", tipo: "RESERVA", legendaNome: "GORILA", area: "Animalia Reserva", desc: "Recinto", icone: "icons/gorila.png", categoria: "animais", top: 83, left: 73 },
            { id: "zoo_hipo", nome: "HIPOPOTAMO", tipo: "RESERVA", legendaNome: "HIPOPOTAMO", area: "Animalia Reserva", desc: "Recinto", icone: "icons/hipopotamo.png", categoria: "animais", top: 42, left: 63 },
            { id: "zoo_mandril", nome: "MANDRIL", tipo: "RESERVA", legendaNome: "MANDRIL", area: "Animalia Reserva", desc: "Recinto", icone: "icons/mandril.png", categoria: "animais", top: 70, left: 78 },
            { id: "zoo_lobo", nome: "LOBO-MARINHO", tipo: "RESERVA", legendaNome: "LOBO-MARINHO", area: "Animalia Reserva", desc: "Recinto", icone: "icons/lobo.png", categoria: "animais", top: 80, left: 78 },
            { id: "zoo_rino", nome: "RINOCERONTE", tipo: "RESERVA", legendaNome: "RINOCERONTE", area: "Animalia Reserva", desc: "Recinto", icone: "icons/rino.png", categoria: "animais", top: 72, left: 74 },
            { id: "zoo_drome", nome: "DROMEDARIO", tipo: "RESERVA", legendaNome: "DROMEDARIO", area: "Animalia Reserva", desc: "Recinto", icone: "icons/dromedario.png", categoria: "animais", top: 45, left: 70 },
            { id: "zoo_canguru", nome: "CANGURU", tipo: "RESERVA", legendaNome: "CANGURU", area: "Animalia Reserva", desc: "Recinto", icone: "icons/canguru.png", categoria: "animais", top: 43, left: 75 },
            { id: "zoo_aviario2", nome: "AVIARIO 2", tipo: "RESERVA", legendaNome: "AVIARIO 2", area: "Animalia Reserva", desc: "Recinto", icone: "icons/aviario2.png",  top: 23, left: 59 }
        ]
    }
};

let scale = 1, pointX = 0, pointY = 0, startX = 0, startY = 0, isDragging = false;
let marcadorUsuario = null; // Guarda o elemento HTML do seu ponto de GPS no mapa
let ultimaLatGps = null;   // Salva a última latitude para persistir ao trocar de filtro
let ultimaLngGps = null;   // Salva a última longitude para persistir ao trocar de filtro

// ==========================================
// FUNÇÕES DE MAPA E INTERFACE
// ==========================================

function atualizarTransformacao() {
    const mapa = document.getElementById("mapa");
    if (!mapa) return;
    mapa.style.transform = `translate(${pointX}px, ${pointY}px) scale(${scale})`;
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
        item.innerHTML = `<img src="${ponto.icone}" alt="${textoLegenda}" style="width: 20px; height: 20px; object-fit: contain;"> <span>${textoLegenda}</span>`;

        item.onclick = () => {
            focarNoPonto(ponto.top, ponto.left);
            abrirLocal(ponto);
        };

        containerLegenda.appendChild(item);
    });
}

function focarNoPonto(topPercent, leftPercent) {
    const container = document.getElementById("mapaContainer");
    const imgMapa = document.getElementById("imagemMapa");
    const mapaWrapper = document.getElementById("mapa");
    
    if (!container || !imgMapa) return;

    scale = 1.2; 
    atualizarTransformacao();

    const realWidth = imgMapa.naturalWidth * scale;
    const realHeight = imgMapa.naturalHeight * scale;
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    const pontoXPx = (leftPercent / 100) * realWidth;
    const pontoYPx = (topPercent / 100) * realHeight;

    pointX = (containerWidth / 2) - pontoXPx;
    pointY = (containerHeight / 2) - pontoYPx;

    mapaWrapper.style.transition = "transform 0.4s ease-in-out";
    atualizarTransformacao();

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
    if (!imgMapa) return;
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

function zoomIn() { 
    scale = Math.min(scale + 0.25, 3.0); 
    atualizarTransformacao(); 
}

function zoomOut() { 
    scale = Math.max(scale - 0.25, 0.2); 
    atualizarTransformacao(); 
}

// ==========================================
// GEOLOCALIZAÇÃO E MARCADOR DO USUÁRIO
// ==========================================

function iniciarGeolocalizacao() {
    if (!navigator.geolocation) {
        console.warn("Geolocalização não é suportada pelo seu navegador.");
        return;
    }

    navigator.geolocation.watchPosition(
        (posicao) => {
            const latitude = posicao.coords.latitude;
            const longitude = posicao.coords.longitude;
            
            console.log(`GPS atualizado: Lat ${latitude}, Lng ${longitude}`);
            atualizarMarcadorGpsNoMapa(latitude, longitude);
        },
        (erro) => {
            console.error("Erro ao obter geolocalização:", erro.message);
        },
        {
            enableHighAccuracy: true,
            maximumAge: 10000,
            timeout: 20000
        }
    );
}

function atualizarMarcadorGpsNoMapa(lat, lng) {
    // Salva as coordenadas globalmente para reexibir caso a camada seja limpa (ex: filtros)
    ultimaLatGps = lat;
    ultimaLngGps = lng;

    const camadaPontos = document.getElementById('camadaPontos');
    const imagemMapa = document.getElementById('imagemMapa');
    
    if (!camadaPontos) {
        console.error("Erro crítico: #camadaPontos não existe no HTML.");
        return;
    }

    // Cria o marcador se ele não existir
    if (!marcadorUsuario) {
        marcadorUsuario = document.createElement('div');
        marcadorUsuario.className = 'ponto-usuario-gps';
        marcadorUsuario.style.position = 'absolute';
        marcadorUsuario.style.width = '24px';
        marcadorUsuario.style.height = '24px';
        marcadorUsuario.style.transform = 'translate(-50%, -50%)';
        marcadorUsuario.style.zIndex = '9999';
        marcadorUsuario.innerHTML = `
            <div class="pulso-gps" style="position:absolute; width:36px; height:36px; background:rgba(0,122,255,0.4); border-radius:50%; top:50%; left:50%; transform:translate(-50%,-50%);"></div>
            <div class="centro-gps" style="position:absolute; width:14px; height:14px; background:#007AFF; border:2px solid #fff; border-radius:50%; top:50%; left:50%; transform:translate(-50%,-50%);"></div>
        `;
        camadaPontos.appendChild(marcadorUsuario);
        console.log("Elemento GPS injetado com estilos diretos!");
    } else {
        // Garante que se a camada foi recriada/limpa, o marcador volta para dentro dela
        if (!camadaPontos.contains(marcadorUsuario)) {
            camadaPontos.appendChild(marcadorUsuario);
        }
    }

    const coordsMapeadas = converterLatLonParaPorcentagem(lat, lng);

    if (imagemMapa && imagemMapa.clientWidth > 0) {
        const posX = (coordsMapeadas.x / 100) * imagemMapa.clientWidth;
        const posY = (coordsMapeadas.y / 100) * imagemMapa.clientHeight;
        marcadorUsuario.style.left = `${posX}px`;
        marcadorUsuario.style.top = `${posY}px`;
    } else {
        marcadorUsuario.style.left = `${coordsMapeadas.x}%`;
        marcadorUsuario.style.top = `${coordsMapeadas.y}%`;
    }
}

// Função de conversão utilizando os seus limites exatos calibrados
function converterLatLonParaPorcentagem(lat, lng) {
    const latMin = -23.626065; // Inferior Direito (Sul)
    const latMax = -23.619751; // Superior Esquerdo (Norte)
    const lngMin = -46.970382; // Superior Esquerdo (Oeste)
    const lngMax = -46.962582; // Inferior Direito (Leste)

    let x = ((lng - lngMin) / (lngMax - lngMin)) * 100;
    let y = ((latMax - lat) / (latMax - latMin)) * 100; 

    console.log(`Posição calculada -> X: ${x.toFixed(1)}%, Y: ${y.toFixed(1)}%`);

    x = Math.max(0, Math.min(100, x));
    y = Math.max(0, Math.min(100, y));

    return { x, y };
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
    iniciarGeolocalizacao();

    const container = document.getElementById("mapaContainer");
    if (!container) return;

    container.addEventListener("mousedown", (e) => {
        if (e.target.closest(".painel-legenda-lateral")) return;

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

    container.addEventListener("touchstart", (e) => {
        if (e.target.closest(".painel-legenda-lateral")) return;

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
        if (e.target.closest(".painel-legenda-lateral")) return;

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

// ==========================================
// FUNÇÕES AUXILIARES DE UI
// ==========================================

function toggleLegenda() {
    const painel = document.querySelector('.painel-legenda-lateral');
    if (painel) {
        painel.classList.toggle('ativa');
    }
}

function fecharAoClicarFora(event) {
    const janela = document.getElementById('janelaLocal');
    if (event.target === janela) {
        janela.classList.remove('ativa');
    }
}

function renderizarPontos(categoriaFiltro) {
    const camada = document.getElementById("camadaPontos");
    if (!camada) return;
    
    // Limpa os pontos anteriores do mapa
    camada.innerHTML = "";

    // REINSERE O MARCADOR DO GPS PARA ELE NÃO SUMIR AO TROCAR DE FILTRO
    if (marcadorUsuario) {
        camada.appendChild(marcadorUsuario);
    }

    const pontosDaLegenda = [];

    // Percorre os pontos do parque baseados no objeto de dados
    if (window.dadosPark && dadosPark.reserva && dadosPark.reserva.pontos) {
        dadosPark.reserva.pontos.forEach(ponto => {
            if (categoriaFiltro === 'todos' || ponto.categoria === categoriaFiltro) {
                const el = document.createElement("div");
                el.className = "ponto";
                el.style.position = "absolute";
                el.style.top = ponto.top + "%";
                el.style.left = ponto.left + "%";
                el.style.transform = "translate(-50%, -50%)";
                el.style.cursor = "pointer";
                el.style.zIndex = "100";
                
                el.innerHTML = `<img src="${ponto.icone}" alt="${ponto.nome}" class="icone-marcador" style="width: 24px; height: 24px; object-fit: contain;">`;
                
                el.onclick = (e) => { 
                    e.stopPropagation(); 
                    abrirLocal(ponto); 
                };
                
                camada.appendChild(el);
                pontosDaLegenda.push(ponto);
            }
        });
    }

    // Atualiza a legenda lateral com os pontos filtrados visíveis
    atualizarLegendaLateral(pontosDaLegenda);
}
