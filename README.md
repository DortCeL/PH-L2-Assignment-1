# প্রশ্নঃ What is the use of the `keyof` keyword in TypeScript? Provide an example.

## উত্তরঃ

'keyof' কি-ওয়ার্ড টা কোনো টাইপের key গুলো কে স্ট্রিং হিসেবে এনে একটা Union টাইপ রিটার্ন করে। এতে করে আমরা সেইফলি কোনো অব্জেক্ট টাইপের প্রপার্টি গুলো কে বের করে আনতে পারি এবং কোথাও ব্যবহার করতে পারি। উদাহরণঃ

```ts
type Mobile {
    id: number;
    brand: string;
    model: string;
}

type KeyOfMobile = keyof Mobile;
```

এখানে KeyOfMobile হবে "id" | "brand" | "model".
জেনেরিক টাইপ নিয়ে কাজ করার সময় keyof ব্যবহার হয়।

# প্রশ্নঃ Explain the difference between `any`, `unknown`, and `never` types in TypeScript.

## উত্তরঃ

any, unknown এবং never এর মধ্যে পার্থক্যঃ

- ১. any: এই টাইপ এর মাধ্যমে বোঝানো হয় ডেটা যেকোনো টাইপের হতে পারে। any ব্যবহার করা টা সেইফ না কারণ এটা টাইপ চেকিং ছাড়াই যেকোনো মেথড কল করতে দেয়।
- ২. unknown: এই টাইপও ডেটা কে যেকোনো টাইপ হতে দেয় কিন্তু any এর থেকে সেইফ কারণ এটা টাইপ চেকিং ছাড়া ঐ ডেটার উপর মেথড কল করতে দেয় না।
- ৩. never: এটার মানে ঐ টাইপ যা কখনো হবে না। কোনো আউটকাম যদি অসম্ভব হয় সেটা never টাইপ। মূলত একটি ফাংশন যদি কখনো কোনোকিছু রিটার্ন না করে, তাহলে বলা যায় এর রিটার্ন টাইপ হলো never.
