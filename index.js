const  Discord = require('discord.js');

const Client = new Discord.Client({
    intents : [
        Discord.Intents.FLAGS.GUILDS, 
        Discord.Intents.FLAGS.GUILD_MESSAGES, 
        Discord.Intents.FLAGS.GUILD_MEMBERS
    ]
});

const config = require('./config.json');

var nbTicket = 0



Client.login(config.client.token);

Client.on("ready", bot => {
    //Message
    console.log('Opé')

    //Activité
    Client.user.setPresence({activities : [{ name: "la Az0x rouler sur paladium", type: "WATCHING"}] })
});


//Menu de sélection
Client.on("messageCreate", message => {

    if(message.author.bot) return;

    var row = new Discord.MessageActionRow()
        .addComponents(
            new Discord.MessageSelectMenu()
                .setCustomId("select")
                .setPlaceholder("Sélectionnez une option pour ouvrir un ticket")
                .addOptions([
                    //Chaque option ici
                    {
                        label: "Pour rouvrir un ticket, cliquez ici",
                        description: "Une fois cette option  sélectionnée, resélectionnez l'option choise",
                        value: "reset"
                    },
                    {
                        label: "❓ | Question",
                        description: "Une question ? N'hésitez pas !",
                        value: "qst"
                    },
                    {
                        label: "🎖️ | Postuler",
                        description: "Vous voulez rejoindre notre faction ? Tentez votre chance !",
                        value: "join"
                    },
                    {
                        label: "💵 | Shop",
                        description: "Une envie d'acheter quelque chose ?",
                        value: "shop"
                    },
                    {
                        label: "🪓 | Mercenaire",
                        description: "Besoin de vaillant soldat pour vous protéger ?",
                        value: "pvp"
                    },
                    {
                        label: "📽️ | Montage",
                        description: "Une envie d'acheter quelque chose ?",
                        value: "montage"
                    }
                ])

        );
    
    if(message.content == '/create ticket') {
        message.channel.send({content: "Besoin de quelque chose ? Commandez !", components: [row]});
    }
    
});


Client.on("interactionCreate", interaction => {

    if(interaction.isSelectMenu()){

        if(interaction.customId === "select") {
            console.log(interaction.values);

            if(interaction.values == "reset"){
                interaction.reply({content: "Veuillez resélectionnez une option pour ouvrir un ticket.", ephemeral: true});
            }

            if(interaction.values == "qst"){
                interaction.reply({content: "Vous avez choisi l'option ❓ | Question", ephemeral: true});

                nbTicket++;

                //Nom du ticket
                interaction.guild.channels.create("ticket-" + nbTicket, {
                    parent: "978962595971211324",
                    
                    //Permissions
                    permissionOverwrites: [
                        {
                            id: interaction.guild.id,
                            deny: [Discord.Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Discord.Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id : interaction.guild.roles.cache.get("978963146364563456"),
                            allow: [Discord.Permissions.FLAGS.VIEW_CHANNEL]
                        }
                        
                    ]
                }).then(channel => {
                    var button = new Discord.MessageActionRow()
                        .addComponents(new Discord.MessageButton()
                            .setCustomId("close-ticket")
                            .setLabel("Fermet le ticket")
                            .setStyle("DANGER")
                        );

                    //Message du bot à l'open du ticket
                    channel.send({content: "<@" + interaction.user.id + "> a ouvert un ticket de la catégorie ❓ | Question", components: [button]});

                });
            }

            if(interaction.values == "join"){

                interaction.reply({content: "Les recrutements sont temporairement fermés (RC OFF)", ephemeral: true});


                /*
                interaction.reply({content: "Vous avez choisi l'option 🎖️ | Postuler", ephemeral: true});

                nbTicket++;

                //Nom du ticket
                interaction.guild.channels.create("ticket-" + nbTicket, {
                    parent: "978962595971211324",
                    
                    //Permissions
                    permissionOverwrites: [
                        {
                            id: interaction.guild.id,
                            deny: [Discord.Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Discord.Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id : interaction.guild.roles.cache.get("978963146364563456"),
                            allow: [Discord.Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then(channel => {
                    var button = new Discord.MessageActionRow()
                        .addComponents(new Discord.MessageButton()
                            .setCustomId("close-ticket")
                            .setLabel("Fermet le ticket")
                            .setStyle("DANGER")
                        );

                    //Message du bot à l'open du ticket
                    channel.send({content: "<@" + interaction.user.id + "> a ouvert un ticket de la catégorie 🎖️ | Postuler/n Format :/n/n - Première partie : Faire une description IRL/IG de vous, vos passions/activités dans la vie, vos projets et votre statut dans la vie./n - Deuxième partie : Vos intérêts sur/pour le serveur, votre richesse/capacité, votre passé, vos connaissances et vos horaires./n - Troisième partie : Votre approche vers notre faction, l'intérêt à nous rejoindre et les raisons de vous recruter./n - Conclusion : Informations supplémentaires et message de fin.", components: [button]});

                });
                */

            }

            if(interaction.values == "shop"){
                interaction.reply({content: "Vous avez choisi l'option 💵 | Shop", ephemeral: true});

                nbTicket++;

                //Nom du ticket
                interaction.guild.channels.create("ticket-" + nbTicket, {
                    parent: "978962595971211324",
                    
                    //Permissions
                    permissionOverwrites: [
                        {
                            id: interaction.guild.id,
                            deny: [Discord.Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Discord.Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id : interaction.guild.roles.cache.get("978963146364563456"),
                            allow: [Discord.Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id : interaction.guild.roles.cache.get("979743472426827818"),
                            allow: [Discord.Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then(channel => {
                    var button = new Discord.MessageActionRow()
                        .addComponents(new Discord.MessageButton()
                            .setCustomId("close-ticket")
                            .setLabel("Fermet le ticket")
                            .setStyle("DANGER")
                        );

                    //Message du bot à l'open du ticket
                    channel.send({content: "<@" + interaction.user.id + "> a ouvert un ticket de la catégorie 💵 | Shop", components: [button]});


                });
            }

            if(interaction.values == "pvp"){
                interaction.reply({content: "Vous avez choisi l'option 🪓 | Mercenaire", ephemeral: true});

                nbTicket++;

                //Nom du ticket
                interaction.guild.channels.create("ticket-" + nbTicket, {
                    parent: "978962595971211324",
                    
                    //Permissions
                    permissionOverwrites: [
                        {
                            id: interaction.guild.id,
                            deny: [Discord.Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Discord.Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id : interaction.guild.roles.cache.get("978963146364563456"),
                            allow: [Discord.Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then(channel => {
                    var button = new Discord.MessageActionRow()
                        .addComponents(new Discord.MessageButton()
                            .setCustomId("close-ticket")
                            .setLabel("Fermet le ticket")
                            .setStyle("DANGER")
                        );

                    //Message du bot à l'open du ticket
                    channel.send({content: "<@" + interaction.user.id + "> a ouvert un ticket de la catégorie 🪓 | Mercenaire", components: [button]});


                });
            }

            if(interaction.values == "montage"){
                interaction.reply({content: "Vous avez choisi l'option 📽️ | Montage", ephemeral: true});

                nbTicket++;

                //Nom du ticket
                interaction.guild.channels.create("ticket-" + nbTicket, {
                    parent: "978962595971211324",
                    
                    //Permissions
                    permissionOverwrites: [
                        {
                            id: interaction.guild.id,
                            deny: [Discord.Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Discord.Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id : interaction.guild.roles.cache.get("978963146364563456"),
                            allow: [Discord.Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id : interaction.guild.roles.cache.get("980062314512412772"),
                            allow: [Discord.Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then(channel => {
                    var button = new Discord.MessageActionRow()
                        .addComponents(new Discord.MessageButton()
                            .setCustomId("close-ticket")
                            .setLabel("Fermet le ticket")
                            .setStyle("DANGER")
                        );

                    //Message du bot à l'open du ticket
                    channel.send({content: "<@" + interaction.user.id + "> a ouvert un ticket de la catégorie 📽️ | Montage", components: [button]});
            

                });
            }
        };

    }

    else if(interaction.customId === "close-ticket"){
        interaction.channel.delete();
    }

})
