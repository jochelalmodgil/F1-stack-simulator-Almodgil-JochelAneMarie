
class Queue {
    constructor() {
        this.items = [];
    }

    // Add an element at the rear of the queue
    enqueue(element) {
        this.items.push(element);
        return element;
    }

    // Remove the element at the front of the queue
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.items.shift();
    }

    // Get the front element without removing it
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.items[0];
    }

    // Check if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get the number of elements
    size() {
        return this.items.length;
    }

    // Clear the queue
    clear() {
        this.items = [];
    }
}

const queue = new Queue();

$(document).ready(function () {

    // Display queue elements
    function displayQueue() {
        $("#queue").empty();

        queue.items.forEach(function (item, index) {
            let queueItem = $("<div>")
                .addClass("queue-item")
                .text(item);

            if (index === 0) {
                queueItem.append(
                    $("<small>").text("FRONT")
                );
            }

            if (index === queue.items.length - 1) {
                queueItem.append(
                    $("<small>").text("REAR")
                );
            }

            $("#queue").append(queueItem);
        });
    }

    // Enqueue
    $("#btn_enqueue").on("click", function () {
        let value = $("#queue_data").val().trim();

        if (value === "") {
            alert("Please enter a value.");
            return;
        }

        queue.enqueue(value);
        displayQueue();

        $("#queue_data").val("");
    });

    // Dequeue
    $("#btn_dequeue").on("click", function () {
        let deletedItem = queue.dequeue();

        if (deletedItem !== undefined) {
            $("#dequeued").prepend(
                $("<div>")
                    .addClass("queue-deleted")
                    .text(deletedItem)
            );

            displayQueue();
        } else {
            alert("Queue is empty.");
        }
    });

    // Peek
    $("#btn_peek").on("click", function () {
        let frontItem = queue.peek();

        if (frontItem !== undefined) {
            let frontElement = $("#queue .queue-item").first();

            frontElement.addClass("pick");

            setTimeout(function () {
                frontElement.removeClass("pick");
            }, 700);

        } else {
            alert("Queue is empty.");
        }
    });

    // Clear
    $("#btn_clear").on("click", function () {
        queue.clear();

        $("#queue").empty();
        $("#dequeued").empty();
    });

});
