import { defineComponent } from 'vue';
import { withInstall } from './utils/withInstall';
import MyButton from "./components/button.vue";

export { MyButton }

export default withInstall(
  defineComponent({
    name: 'my-component',
    setup() {
      return () => <div>Vue Component Template hot tesssst sssaaaxxx</div>;
    }
  })
);