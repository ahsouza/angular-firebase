import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { SectionComponent } from './section/section.component';
import { CardComponent } from './card/card.component';
import { AvatarComponent } from './avatar/avatar.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { InputComponent } from './form/input/input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { NavbarComponent } from './header/navbar/navbar.component';
import { ToolbarComponent } from './header/toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { ScheduleComponent } from './schedule/schedule.component';
import { FriendsComponent } from './friends/friends.component';
import { SettingsComponent } from './settings/settings.component';
import { ChatComponent } from './section/chat/chat.component';
import { ClientsComponent } from './section/clients/clients.component';
import { AccountComponent } from './section/account/account.component';
import { SavingsComponent } from './savings/savings.component';
import { ActivityComponent } from './activity/activity.component';
import { ReportsComponent } from './reports/reports.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CreditsComponent } from './credits/credits.component';
import { LinkComponent } from './payment/link/link.component';
import { QRcodeComponent } from './payment/qrcode/qrcode.component';
import { PIXComponent } from './payment/pix/pix.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { AwardsComponent } from './awards/awards.component';
import { ProfileComponent } from './profile/profile.component';
import { CashComponent } from './transfers/cash/cash.component';
import { CreditComponent } from './transfers/credit/credit.component';
import { LevelsComponent } from './profile/levels/levels.component';
import { MoneyComponent } from './profile/money/money.component';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FriendComponent } from './profile/payments/friend/friend.component';
import { BusinessComponent } from './profile/payments/business/business.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SectionComponent,
    CardComponent,
    AvatarComponent,
    FormComponent,
    TableComponent,
    InputComponent,
    NavbarComponent,
    ToolbarComponent,
    ScheduleComponent,
    FriendsComponent,
    SettingsComponent,
    ChatComponent,
    ClientsComponent,
    AccountComponent,
    SavingsComponent,
    ActivityComponent,
    ReportsComponent,
    CreditsComponent,
    LinkComponent,
    QRcodeComponent,
    PIXComponent,
    SubscriptionsComponent,
    AwardsComponent,
    ProfileComponent,
    CashComponent,
    CreditComponent,
    LevelsComponent,
    MoneyComponent,
    FriendComponent,
    BusinessComponent
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatInputModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatToolbarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
