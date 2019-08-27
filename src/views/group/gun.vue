<template>
 <Anchor show-ink class="left">
        <AnchorLink href="#1" title="Basic Usage" />
        <AnchorLink href="#2" title="Static Position" />
        <AnchorLink href="#3" title="API">
            <AnchorLink href="#4" title="Anchor props" />
            <AnchorLink href="#5" title="Anchor events" />
            <AnchorLink href="#6" title="AnchorLink props" />
        </AnchorLink>
        <div class="scroll">
                <div id='1'>1</div>
                <div id='2'>2</div>
                <div id='3'>3</div>
                <div id='4'>4</div>
                <div id='5'>5</div>
                <div id='6'>6</div>
        </div>
</Anchor>
</template>
<style lang="scss" scoped>
    .left{
        width: 26%;
        position: fixed;
    }
    .scroll{
        overflow-y:scroll;
        margin-left:26%;
        width:74%;
        height: 900pz;
        display: block;width: 80%;float: left;position: relative;overflow-y: scroll;
        div{
            height:900px;
           
        }
    }
</style>

<script>
import {AnchorLink} from 'iview';
    export default {
        components:{
            AnchorLink
        },
        data() {
            return {
                atop:50
            }
        },
       
    }
</script>
