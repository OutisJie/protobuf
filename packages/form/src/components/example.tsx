import { defineComponent } from "vue";
import { withInstall } from "../utils/withInstall";

export default withInstall(
  defineComponent({
    name: 'my-component',
    setup() {
      return () => <div>Vue Component Template hot tesssst sssaaaxxx</div>;
    }
  })
);