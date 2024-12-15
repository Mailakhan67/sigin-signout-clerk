import {

    ClerkProvider,
    ClerkLoaded,
    ClerkLoading,
    // SignInButton,
    // SignedIn,
    // SignedOut,
    // UserButton
  } from '@clerk/nextjs'
  import './globals.css'
import Navbar from '@/components/Navbar'
import { dark } from '@clerk/themes'
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <ClerkProvider appearance={{baseTheme : dark}}>
        <html lang="en">
          <body>
            <ClerkLoading>
              <div className='flex items-center justify-center h-screen text-2xl'>
LOADING...
              </div>
            </ClerkLoading>
            {/* <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn> */}
            <ClerkLoaded>
            <div className='max-w-6xl mx-auto'>
<div className='flex flex-col h-screen'><Navbar/>
{children}
</div>
            </div>
            </ClerkLoaded>
            {/* {children} */}
          </body>
        </html>
      </ClerkProvider>
    )
  }