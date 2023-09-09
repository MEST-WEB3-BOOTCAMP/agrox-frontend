<template>
  <div class="">
    <div class="services-details__content-box" v-if="$store.state.common.menu === 'proposals'">
      <h3 class="services-details__title">We Expect Much From You!</h3>
      <p class="services-details__text-1">
        Writing proposals serves several important purposes. Here are some key reasons why we require you to put in much
        effort to submit yours.
      </p>

      <div class="service-details__faq">
        <div class="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion">
          <div v-for="benefit in proposals" class="accrodion" :class="activeProposal === benefit.title ? 'active' : ''"
               @click.prevent="handleAccordionClicked(benefit)">
            <div class="accrodion-title">
              <h4>{{ benefit.title }}</h4>
            </div>
            <div class="accrodion-content" :class="activeProposal === benefit.title ? '' : 'd-none'">
              <div class="inner">
                <p>{{ benefit.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="d-flex justify-content-center mt-4">
        <a
          @click.prevent="handleProceedClicked"
          href=""
          class="thm-btn main-slider__btn"> Proceed <i class="icon-right-arrow"> </i> </a>
      </div>
    </div>

    <div class="services-details__content-box" v-if="$store.state.common.menu === 'proceed'">
      <!--      <section class="checkout-page">-->
      <!--        <div class="container">-->
      <div class="row">
        <!--            <div class="billing_details">-->
        <div class="billing_title">
          <h2>Proposal Details</h2>
        </div>
        <form class="billing_details_form">
          <div class="row">
            <div class="col-xl-12">

            </div>
          </div>
          <div class="row bs-gutter-x-20">
            <div class="col-xl-6">
              <div class="billing_input_box">
                <input type="text" name="first_name" value="" placeholder="First Name"
                       required="">
              </div>
            </div>
            <div class="col-xl-6">
              <div class="billing_input_box">
                <input type="text" name="last_name" value="" placeholder="Last Name"
                       required="">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-12">
              <div class="billing_input_box">
                <input type="text" name="company_name" value="" placeholder="Company">
              </div>
            </div>
            <div class="col-xl-12">
              <div class="billing_input_box">
                <input type="text" name="Address" value="" placeholder="Address">
              </div>
            </div>
            <div class="col-xl-12">
              <div class="billing_input_box">
                <input type="text" name="company_name" value=""
                       placeholder="Crop of interest">
              </div>
            </div>
          </div>
          <div class="row bs-gutter-x-20">
            <div class="col-xl-6">
              <div class="billing_input_box">
                <input type="text" name="State" value="" placeholder="State" required="">
              </div>
            </div>
            <div class="col-xl-6">
              <div class="billing_input_box">
                <input name="form_zip" type="text" value="" placeholder="Town/City">
              </div>
            </div>
            <div class="col-xl-6">
              <div class="billing_input_box">
                <input name="email" type="email" placeholder="Email Address">
              </div>
            </div>
            <div class="col-xl-6">
              <div class="billing_input_box">
                <input type="tel" name="form_phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                       required="" placeholder="Phone Number">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="d-flex justify-content-center mt-4">
              <a
                @click.prevent="handleSubmit"
                href=""
                class="thm-btn main-slider__btn"> Submit <i class="icon-right-arrow"> </i> </a>
            </div>
          </div>
        </form>

      </div>
    </div>

    <div class="services-details__content-box" v-if="$store.state.common.menu === 'transactions'">
      <h3 class="services-details__title">My transactions!</h3>
      <div class="row">
        <div class="order_table_box">
          <table class="order_table_detail">
            <thead class="order_table_head">
            <tr>
              <th>Product</th>
              <th class="right">Price</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td class="pro__title">Product Name</td>
              <td class="pro__price">$10.99 USD</td>
            </tr>
            <tr>
              <td class="pro__title">Subtotal</td>
              <td class="pro__price">$10.99 USD</td>
            </tr>
            <tr>
              <td class="pro__title">Shipping</td>
              <td class="pro__price">$0.00 USD</td>
            </tr>
            <tr>
              <td class="pro__title">Total</td>
              <td class="pro__price">$20.98 USD</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  components: {},

  layout: "dashboard",
  computed: {
    isActive() {
      return this.activeProposal === this.title
    },
  },
  data() {
    return {
      proposals: [
        {
          title: "Securing Funding",
          description: "Your proposals help secure funding for agricultural projects, enabling investment in equipment, technology, and resources."
        },
        {
          title: "Partnerships",
          description: "Proposals facilitate collaborations with companies or organizations for mutual benefit and growth."
        },
        {
          title: "Market Access",
          description: "Proposals aid in accessing markets, demonstrating product quality and compliance with regulations."
        },
        {
          title: "Planning",
          description: "Proposals serve as blueprints for farm projects, guiding efficient resource allocation and operations"
        },
        {
          title: "Assessing Environmental Impact",
          description: "Proposals address sustainable farming practices, showcasing commitment to environmental responsibility."
        },
        {
          title: "Quality Assurance",
          description: "Proposals assure consumers of product quality and safety through transparent supply chains."
        },
        {
          title: "Competitive Edge",
          description: "Proposals help farms gain a competitive edge by pursuing strategic initiatives and advancements."
        }
      ],
      activeProposal: "Securing Funding",
    }
  },
  methods: {
    handleAccordionClicked(benefit) {
      return this.activeProposal = benefit.title
    },
    handleProceedClicked() {
      this.$store.commit('common/setMenu', 'proceed')
    },
    handleSubmit() {
      this.$store.commit('common/setMenu', 'transactions')
    }
  }
}
</script>

<style scoped>

</style>
