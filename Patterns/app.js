// // // // //Module Pattern basic structure

// // // // // (function(){
// // // // //   //Declare private variables and functions

// // // // //   return {
// // // // //     // Declare public variables and functions
// // // // //   }
// // // // // })();

// // // // //Standard Module Pattern
// // // // const UICtrl = (function() {
// // // //   let text = 'Hello World';

// // // //   const changeText = function() {
// // // //     const element = document.querySelector('h1');
// // // //     element.textContent = text;
// // // //   }

// // // //   return { //anything in return is public
// // // //     callChangeText: function() {
// // // //       changeText();
// // // //       // console.log(text);
// // // //     }
// // // //   }
// // // // })();

// // // // UICtrl.callChangeText();
// // // // // UICtrl.changeText();

// // // // console.log(UICtrl.text);


// // // //Revealing Module Patterns
// // // const ItemCtrl = (function() {
// // //   let data = [];

// // //   function add(item) {
// // //     data.push(item);
// // //     console.log('Item Added...');
// // //   }

// // //   function get(id) {
// // //     return data.find(item => {
// // //       return item.id === id;
// // //     });
// // //   }
// // //     return {
// // //       add: add,
// // //       get: get
// // //     }
// // //   })();

// // // ItemCtrl.add({id: 1, name: 'John'});
// // // ItemCtrl.add({id: 2, name: 'Mark'});
// // // console.log(ItemCtrl.get(1));


// // //Singleton Pattern - can only return 1 instance of a constructor

// // const Singleton = (function() {
// //   let instance;

// //   function createInstance() {
// //     const object = new Object({name: 'Brad'});
// //     return object;
// //   }

// //   return {
// //     getInstance: function() {
// //       if(!instance) {
// //         instance = createInstance();
// //       }
// //       return instance;
// //     }
// //   }
// // })();

// // const instanceA = Singleton.getInstance();
// // const instanceB = Singleton.getInstance();

// // console.log(instanceA === instanceB);
// // // console.log(instanceA);


// //Factory Pattern (Factor Method)

// function MemberFactory() {
//   this.createMember = function(name, type) {
//     let member;

//     if(type === 'simple') {
//       member = new SimpleMembership(name);
//     } else if (type === 'standard') {
//       member = new StandardMembership(name);
//     } else if (type === 'super') {
//       member = new SuperMembership(name);
//     } 
//     member.type = type;

//     member.define = function() {
//       console.log(`${this.name} (${this.type}): ${this.cost}`);
//     }

//     return member;
//   }
// }

// const SimpleMembership = function(name) {
//   this.name = name;
//   this.cost = '$5';
// }

// const StandardMembership = function(name) {
//   this.name = name;
//   this.cost = '$15';
// }

// const SuperMembership = function(name) {
//   this.name = name;
//   this.cost = '$25';
// }

// const members = [];
// const factory = new MemberFactory();

// members.push(factory.createMember('John Doe', 'Simple'));

// console.log(members);


//Observer Pattern

function EventObserver() {
  this.observers = [];

}

EventObserver.prototype = {
  subscribe: function (fn) {
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name}`)
  },
  unsubscribe: function (fn) {
    this.observers = this.observers.filter(function (item) {
      if (item !== fn) {
        return item;
      }
    });
    console.log(`You are now unsibscribed from ${fn.name}`)
  },
  fire: function() {
    this.observers.forEach(function(item) {
      item.call();
    });
  }
}

const click = new EventObserver();

//event listeners

document.querySelector('.sub-ms').addEventListener('click', function() {
  click.subscribe(getCurMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function() {
  click.unsubscribe(getCurMilliseconds);
});

document.querySelector('.fire').addEventListener('click', function() {
  click.fire();
});

const getCurMilliseconds = function() {
  console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
}