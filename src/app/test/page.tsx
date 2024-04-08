import { Container } from '@/shared/components';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="h-screen pt-[150px]">
      <Container>
        <div className="flex flex-col">
          <Link href="/">- main</Link>
          <Link href="/cart">- cart</Link>
          <Link href="/catalogue">- catalogue</Link>
          <Link href="/catalogue-seller">- catalogue-seller</Link>
          <Link href="/my-data">- my-data</Link>
          <Link href="/order-details">- order-details</Link>
          <Link href="/product-card">- product-card</Link>
          <Link href="/recover-password">- recover-password</Link>
          <Link href="/signin">- signin</Link>
          <Link href="/signin-forgot">- signin-forgot</Link>
          <Link href="/signup">- signup</Link>
          <Link href="/not-found">- not-found</Link>
        </div>
      </Container>
    </div>
  );
}
