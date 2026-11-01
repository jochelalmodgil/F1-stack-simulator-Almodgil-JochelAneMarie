
class Stack {
    constructor() {
        this.items = [];
        this.count = 0;
    }

    // Add element to top of stack
    push(element) {
        this.items[this.count] = element;
        let push_res = `${element}`;
        this.count += 1;
        let count = this.count - 1;
        return [push_res, count];
    }

    // Return and remove top element in stack
    // Return undefined if stack is empty
    pop() {
        if (this.count == 0) return undefined;

        let deleteItem = this.items[this.count - 1];
        this.count -= 1;
        console.log(`${deleteItem} removed`);
        return deleteItem;
    }

    // Check top element in stack
    peek() {
        if (this.count == 0) return undefined;

        console.log(`Top element is ${this.items[this.count - 1]}`);
        return this.items[this.count - 1];
    }

    // Check if stack is empty
    isEmpty() {
        console.log(this.count == 0 ? 'Stack is empty' : 'Stack is NOT empty');
        return this.count == 0;
    }

    // Check size of stack
    size() {
        console.log(`${this.count} elements in stack`);
        return this.count;
    }

    // Print elements in stack
    print() {
        let str = '';
        for (let i = 0; i < this.count; i++) {
            str += this.items[i] + ' ';
        }
        return str;
    }

    // Clear stack
    clear() {
        this.items = [];
        this.count = 0;
        console.log('Stack cleared..');
        return this.items;
    }
}

const stack = new Stack();

let stackID = 0;

$(document).ready(function(){

    // Push
    $("#btn_push").on("click", function(){
        let value = $("#st_data").val().trim();

        if(value === ""){
            alert("Please enter a value.");
            return;
        }

        let push_data = stack.push(value);
        stackID++;

        $("#stack").prepend(`<div id="ST${stackID}" class="row bg-primary push">${push_data[0]}</div>`);
        $("#st_data").val("");
    });

    // Pop
    $("#btn_pop").on("click", function(){
        let pop_data = stack.pop();

        if(pop_data !== undefined){
            $("#pop").prepend(`<div class="row pop text-bg-danger border border-light">${pop_data}</div>`);
            $("#stack .push").first().remove();
        } else {
            alert("Stack is empty.");
        }
    });

    // Peek
    $("#btn_peek").on("click", function(){
        let peek_data = stack.peek();

        if(peek_data !== undefined){
            $("#stack .push").first().removeClass("bg-primary").addClass("pick");

            setTimeout(function(){
                $("#stack .push").first().removeClass("pick").addClass("bg-primary");
            }, 500);
        } else {
            alert("Stack is empty.");
        }
    });

    // Clear
    $("#btn_clear").on("click", function(){
        stack.clear();
        $("#stack").empty();
        $("#pop").empty();
    });

});
