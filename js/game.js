AFRAME.registerComponent('game-play',{
    schema:{
        elementID: {
            type: 'string',
            default: '#fish1'
        }
    },
    isCollided:function(elementID) {
        const element = document.querySelector(elementID);
        element.addEventListener('collide',(e) => {
            if(elementID.includes('#fish1')) {
                console.log(elementID+' collided')
            }
            else if(elementID.includes('#coin')) {
                console.log('coin collision')
            }
        })
    },
    update:function(){
        this.isCollided(this.data.elementID)
    }
})