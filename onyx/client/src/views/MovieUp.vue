<template>
    <div class="mx-auto" style="max-width: 50rem;">
        <form>
            <div class="mb-3">
                <label for="cim" class="form-label">Cím</label>
                <input type="text" v-model="cim" class="form-control" id="cim">
            </div>
            <div class="mb-3">
                <label for="ev" class="form-label">Megjelenés éve</label>
                <input type="text" v-model="ev" class="form-control" id="ev">
            </div>
            <div class="mb-3">
                <label for="rendezo" class="form-label">Rendező</label>
                <input type="text" v-model="rendezo" class="form-control" id="rendezo">
            </div>
            <div class="mb-3">
                <label for="leiras" class="form-label">Rövid leírás</label>
                <textarea class="form-control" v-model="leiras" id="leiras" rows="2"></textarea>
            </div>
            <div class="mb-3">
                <label for="poszter" class="form-label">Poszter</label>
                <input type="file" class="form-control" @change="handleFileUp1($event)" id="poszter">
            </div>
            <div class="mb-3">
            <label for="cat" class="form-label">Kategória</label>
            <select name="cat" id="cat" class="form-select form-select-sm" v-model="cat">
                            <option value="film" selected>Film</option>
                            <option value="sorozat">Sorozat</option>
            </select>
            <select v-if="cat == 'sorozat'" name="ep" id="ep" class="form-select form-select-sm" v-model="ep">
                            <option value="1">Ep 1</option>
                            <option value="2">Ep 2</option>
                            <option value="3">Ep 3</option>
                            <option value="4">Ep 4</option>
                            <option value="5">Ep 5</option>
            </select>
            </div>
            <div class="mb-3" v-if="cat=='film'">
                <label for="film" class="form-label">Film</label>
                <input type="file" class="form-control" @change="handleFileUp2($event)" id="film">
            </div>
            <div class="mb-3" v-if="cat=='sorozat' && ep>=1">
                <label for="sor1" class="form-label">Ep 1</label>
                <input type="file" class="form-control" @change="handleFileUp3($event)" id="sor1">
            </div>
            <div class="mb-3" v-if="cat=='sorozat' && ep>=2">
                <label for="sor2" class="form-label">Ep 2</label>
                <input type="file" class="form-control" @change="handleFileUp4($event)" id="sor2">
            </div>
            <div class="mb-3" v-if="cat=='sorozat' && ep>=3">
                <label for="sor3" class="form-label">Ep 3</label>
                <input type="file" class="form-control" @change="handleFileUp5($event)" id="sor3">
            </div>
            <div class="mb-3" v-if="cat=='sorozat' && ep>=4">
                <label for="sor4" class="form-label">Ep 4</label>
                <input type="file" class="form-control" @change="handleFileUp6($event)" id="sor4">
            </div>
            <div class="mb-3" v-if="cat=='sorozat' && ep>=5">
                <label for="sor5" class="form-label">Ep 5</label>
                <input type="file" class="form-control" @change="handleFileUp7($event)" id="sor5">
            </div>
            <button @click="submitM()" class="btn btn-primary">Feltöltés</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            file1: '',
            file2: '',
            file3: '',
            file4: '',
            file5: '',
            file6: '',
            file7: '',
            cim: '',
            ev: '',
            rendezo: '',
            leiras: '',
            cat: 'film',
            ep: 1
        }
    },
    methods: {
        submitM(){
            let formData = new FormData();
            formData.append('file1', this.file1);
            if(this.cat=="film"){
                formData.append('file2', this.file2);
            }else{
                formData.append('ep', this.ep);
                if(this.ep>=1){formData.append('file3', this.file3);}
                if(this.ep>=2){formData.append('file4', this.file4);}
                if(this.ep>=3){formData.append('file5', this.file5);}
                if(this.ep>=4){formData.append('file6', this.file6);}
                if(this.ep>=5){formData.append('file7', this.file7);}
            }
            
            formData.append('cat',  this.cat );
            formData.append('name', this.cim);
            formData.append('year', this.ev);
            formData.append('dir', this.rendezo);
            formData.append('desc', this.leiras);

            axios.post('http://localhost:5000/api/movies/upload', formData, 
                {
                    headers: {
                        'Content-type' : 'multipart/form-data'
                    }
                })
                .then(response => console.log(response.data))
                .catch(err => console.log(err))
            this.$router.push('/');

        },
        handleFileUp1(event){
            this.file1 = event.target.files[0];
        },
        handleFileUp2(event){
            this.file2 = event.target.files[0];
        },
        handleFileUp3(event){
            this.file3 = event.target.files[0];
        },
        handleFileUp4(event){
            this.file4 = event.target.files[0];
        },
        handleFileUp5(event){
            this.file5 = event.target.files[0];
        },
        handleFileUp6(event){
            this.file6 = event.target.files[0];
        },
        handleFileUp7(event){
            this.file7 = event.target.files[0];
        }
    },
}
</script>