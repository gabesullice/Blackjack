var newLeft = 90;

Table = (function ()
    {
    var Table = function (selector)
        {
        this.$board = $(selector);
        }

    Table.prototype =
        {
        addCard: function (card, player)
            {
            var $card = this.createCard(card);
            $card.addClass(player.id + "Hand");
            $card.addClass(player.type + "Cards");
            $card.css('left', newLeft);
            newLeft += 12;
            this.$board.append($card);

            return this;
            },

        createCard: function (card)
            {
            $card = $('<img />');
            $card.attr("id", card.id);
            $card.attr("src", card.face);
            return $card;
            }
        };

    return Table;
    })();
