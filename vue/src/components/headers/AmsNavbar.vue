<template>
  <div class="grid flex justify-content-end pb-3">
    <div class="col-3 pb-0">
      <img alt="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROQ7UCmfAVDlSRQuo8j1rvLEbiFDrsfWEAVh_Ki8NjEWzJMlQW2K2fzuyEW8Ag192MsE8&usqp=CAU" height="40" class="mr-2"/>
    </div>
    <div class="col-9 pb-0">
      <AmsMenubar :model="items" class="p-menubar-end p-menuitem-active"></AmsMenubar>
      <AmsButton class="margin_top" label="Login" size="small" rounded @click="this.display = true" />
    </div>
  </div>

    <LogIn
        :display="this.display"
        @modal-response="getModalResponse($event)"
    />
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "AmsNavbar",
  data() {
    return {
      display: false,
     items: [
      {
        label: 'Overview',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'Customs',
            icon: 'pi pi-fw pi-plus',
            items: [
              {
                label: 'Switch',
                icon: 'pi pi-fw pi-bookmark',
                to: '/switch'
              },
              {
                label: 'Video',
                icon: 'pi pi-fw pi-video'
              }
            ]
          },
          {
            label: 'Charts',
            icon: 'pi pi-fw pi-trash',
            to: '/charts'
          },
          {
            separator: true
          },
          {
            label: 'table',
            icon: 'pi pi-fw pi-external-link',
            to: '/test-table'
          },
          {
            label: 'Datatables',
            icon: 'pi pi-fw pi-external-link',
            to: '/table'
          }
        ]
      },
      {
        label: 'Solutions',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Left',
            icon: 'pi pi-fw pi-align-left'
          },
          {
            label: 'Right',
            icon: 'pi pi-fw pi-align-right'
          },
          {
            label: 'Center',
            icon: 'pi pi-fw pi-align-center'
          },
          {
            label: 'Justify',
            icon: 'pi pi-fw pi-align-justify'
          }
        ]
      },
      {
        label: 'Features',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-user-plus'
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-user-minus'
          },
          {
            label: 'Search',
            icon: 'pi pi-fw pi-users',
            items: [
              {
                label: 'Filter',
                icon: 'pi pi-fw pi-filter',
                items: [
                  {
                    label: 'Print',
                    icon: 'pi pi-fw pi-print'
                  }
                ]
              },
              {
                label: 'List',
                icon: 'pi pi-fw pi-bars'
              }
            ]
          }
        ]
      },
      {
        label: 'Demo',
        icon: 'pi pi-fw pi-calendar',
        items: [
          {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
              {
                label: 'Save',
                icon: 'pi pi-fw pi-calendar-plus'
              },
              {
                label: 'Delete',
                icon: 'pi pi-fw pi-calendar-minus'
              }
            ]
          },
          {
            label: 'Archieve',
            icon: 'pi pi-fw pi-calendar-times',
            items: [
              {
                label: 'Remove',
                icon: 'pi pi-fw pi-calendar-minus'
              }
            ]
          }
        ]
      },
      {
        label: 'Get Quote',
        icon: 'pi pi-fw pi-power-off'
      },
       {
        label: 'Resource',
        icon: 'pi pi-fw pi-calendar',
        items: [
          {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
              {
                label: 'Save',
                icon: 'pi pi-fw pi-calendar-plus'
              },
              {
                label: 'Delete',
                icon: 'pi pi-fw pi-calendar-minus'
              }
            ]
          },
          {
            label: 'Archieve',
            icon: 'pi pi-fw pi-calendar-times',
            items: [
              {
                label: 'Remove',
                icon: 'pi pi-fw pi-calendar-minus'
              }
            ]
          }
        ]
      },
      {
        label: 'Support',
        icon: 'pi pi-fw pi-power-off'
      },
    ]
  }
  },
  methods: {
    getModalResponse(evt: boolean) {
      this.display = evt;
    }
  }
});
</script>

<style scoped>
img {
  width: 100px;
  margin-left: 50px;
}
.margin_top {
  margin-top: 7px
}
.p-menubar {
  background: transparent;
  border: none;
  width: 80%;
  float: left;
}

</style>