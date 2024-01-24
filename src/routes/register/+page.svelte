<script lang="ts">
  import { useForm, Field } from "svelte-reactive-form";
  import "$lib/js/rules"

  const form$ = useForm();
  const { control, validate } = form$;
  const successSubmit = async () => {
    const error = await validate(["email", "password"]);

    if (!error.valid) {
      return;
    }
    console.log("form$ :>> ", form$.getValues());
  };
</script>

<svelte:head>
  <title>Register</title>
</svelte:head>

<form class="form-base" on:submit={form$.onSubmit(successSubmit)}>
  <div class="item-form">
    <Field
      {control}
      name="email"
      rules={["required", "email", "maxString"]}
      let:onChange
      let:errors
    >
      <label for="">Email</label>
      <input on:change={onChange} />

      {#if errors.length > 0}
        <div class="errors">{errors[0]}</div>
      {/if}
    </Field>
  </div>

  <div class="item-form">
    <Field
      {control}
      name="password"
      rules={["required", "minString", "maxString"]}
      let:onChange
      let:errors
    >
      <label for="">Password</label>
      <input type="password" on:change={onChange} />

      {#if errors.length > 0}
        <div class="errors">{errors[0]}</div>
      {/if}
    </Field>
  </div>

  <button class="btn-submit" type="submit">Submit</button>
</form>
