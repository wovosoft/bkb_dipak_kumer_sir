<b-collapse id="contact-info" visible accordion="my-accordion" role="tabpanel">
    <b-card title="Contact Information">
        <b-form @submit.prevent="submitContact">
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
                 :fields="[{key:'type',sortable:true},{key:'content',sortable: true},{key:'action',thClass:'text-right',tdClass:'text-right'}]"
                 :items="getContacts">
            <template #cell(action)="row">
                <b-button-group size="sm">
                    <b-button variant="dark"
                              @click="editContact(row.item)"
                              title="Modify Contact">
                        <i class="fa fa-edit"></i>
                    </b-button>
                    <b-button variant="danger"
                              @click="trashContact(row.item.id)"
                              title="Delete Contact">
                        <i class="fa fa-trash"></i>
                    </b-button>
                </b-button-group>
            </template>
        </b-table>
    </b-card>
</b-collapse>
