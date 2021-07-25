import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'bus',
    loadChildren: () => import('./bus/bus.module').then( m => m.BusPageModule)
  },
  {
    path: 'bus-seat',
    loadChildren: () => import('./bus-seat/bus-seat.module').then( m => m.BusSeatPageModule)
  },
 
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'creditcard',
    loadChildren: () => import('./creditcard/creditcard.module').then( m => m.CreditcardPageModule)
  },
  {
    path: 'booksuccess',
    loadChildren: () => import('./booksuccess/booksuccess.module').then( m => m.BooksuccessPageModule)
  },
  {
    path: 'debitcard',
    loadChildren: () => import('./debitcard/debitcard.module').then( m => m.DebitcardPageModule)
  },
  {
    path: 'wallet',
    loadChildren: () => import('./wallet/wallet.module').then( m => m.WalletPageModule)
  },
  {
    path: 'philtranco',
    loadChildren: () => import('./philtranco/philtranco.module').then( m => m.PhiltrancoPageModule)
  },
  {
    path: 'eaglestar',
    loadChildren: () => import('./eaglestar/eaglestar.module').then( m => m.EaglestarPageModule)
  },
  {
    path: 'payment1',
    loadChildren: () => import('./payment1/payment1.module').then( m => m.Payment1PageModule)
  },
  {
    path: 'payment2',
    loadChildren: () => import('./payment2/payment2.module').then( m => m.Payment2PageModule)
  },
  {
    path: 'booksuccess1',
    loadChildren: () => import('./booksuccess1/booksuccess1.module').then( m => m.Booksuccess1PageModule)
  },
  {
    path: 'book',
    loadChildren: () => import('./book/book.module').then( m => m.BookPageModule)
  },
  {
    path: 'creditcard1',
    loadChildren: () => import('./creditcard1/creditcard1.module').then( m => m.Creditcard1PageModule)
  },
  {
    path: 'creditcard2',
    loadChildren: () => import('./creditcard2/creditcard2.module').then( m => m.Creditcard2PageModule)
  },
  {
    path: 'debitcard1',
    loadChildren: () => import('./debitcard1/debitcard1.module').then( m => m.Debitcard1PageModule)
  },
  {
    path: 'debitcard2',
    loadChildren: () => import('./debitcard2/debitcard2.module').then( m => m.Debitcard2PageModule)
  },
  {
    path: 'wallet1',
    loadChildren: () => import('./wallet1/wallet1.module').then( m => m.Wallet1PageModule)
  },
  {
    path: 'wallet2',
    loadChildren: () => import('./wallet2/wallet2.module').then( m => m.Wallet2PageModule)
  },
  {
    path: 'dltb',
    loadChildren: () => import('./dltb/dltb.module').then( m => m.DltbPageModule)
  },
  {
    path: 'phil',
    loadChildren: () => import('./phil/phil.module').then( m => m.PhilPageModule)
  },
  {
    path: 'eagle',
    loadChildren: () => import('./eagle/eagle.module').then( m => m.EaglePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'login1',
    loadChildren: () => import('./login1/login1.module').then( m => m.Login1PageModule)
  },
  {
    path: 'login2',
    loadChildren: () => import('./login2/login2.module').then( m => m.Login2PageModule)
  },
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
