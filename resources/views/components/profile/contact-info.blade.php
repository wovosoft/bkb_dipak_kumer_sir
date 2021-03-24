<b-collapse id="contact-info" visible accordion="my-accordion" role="tabpanel">
    <b-card title="Contact Information">
        <b-form @submit.prevent="function(){
            genericHandler(
                '{{route('Frontend.contacts.store')}}', contact,
                function(){
                    contact = {content: null, type: 'phone'};
                    $refs.contact_list.refresh();
                }
            )
        }">
            <b-form-group>
                <b-input-group size="sm">
                    <template #prepend>
                        <b-input-group-addon>
                            <b-select
                                size="sm"
                                required
                                v-model="contact.type"
                                :options="[{text:'Email',value:'email'},{text: 'Phone',value: 'phone'}]"></b-select>
                        </b-input-group-addon>
                    </template>
                    <b-input v-model="contact.content"
                             ref="contact_input"
                             required placeholder="Contact Details"
                             type="text"></b-input>
                    <template #append>
                        <b-button type="submit" variant="dark" title="Add Contact">
                            @{{Number(contact.id)?'Edit':'Add'}}
                        </b-button>
                        <b-button @click="contact={content: null, type: 'phone'}"
                                  variant="primary"
                                  title="Reset Contact Form">
                            Reset
                        </b-button>
                        <b-button @click="$refs.contact_list.refresh()" title="Refresh List">
                            <i class="fa fa-redo-alt"></i>
                        </b-button>
                    </template>
                </b-input-group>
            </b-form-group>
        </b-form>
        <b-table small hover striped bordered head-variant="dark"
                 ref="contact_list"
                 :api-url="'{{route('Frontend.contacts.list')}}'"
                 :fields="[{key:'type',sortable:true},{key:'content',sortable: true},{key:'action',thClass:'text-right',tdClass:'text-right'}]"
                 :items="getGenericList">
            <template #cell(content)="row">
                <a :href="(row.item.type==='phone'?'tel:':'mailto:')+row.item.content" target="_blank">
                    @{{ row.item.content }}
                </a>
            </template>
            <template #cell(action)="row">
                <b-button-group size="sm">
                    <b-button variant="dark"
                              @click="()=>{
                                contact = JSON.parse(JSON.stringify(row.item));
                                $refs.contact_input.focus();
                              }"
                              title="Modify Contact">
                        <i class="fa fa-edit"></i>
                    </b-button>
                    <b-button variant="danger"
                              @click="genericTrash(
                                '{{route('Frontend.contacts.trash','')}}/' +row.item.id,
                                function(){$refs.contact_list.refresh()}
                              )"
                              title="Delete Contact">
                        <i class="fa fa-trash"></i>
                    </b-button>
                </b-button-group>
            </template>
        </b-table>
    </b-card>
</b-collapse>
